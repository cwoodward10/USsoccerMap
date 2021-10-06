<script lang="ts">
    import { onMount, tick } from "svelte";
    import { elasticIn } from "svelte/easing";

    let titleBar: HTMLElement;
    let titleBarHoverd: boolean = false;
    let contentContainer: HTMLElement;

    export let cardX: number = 25;
    export let cardY: number = 25;
    let previousMouseX: number | null = null;
    let previousMouseY: number | null = null;
    let isDragging = false;

    let maxHeight = 1000;

    export let canMinimize = true;
    export let canClose = false;
    let isMinimized = false;
    let isMinimizing = false;
    let hoverClose = false;
    let hoverMinimize = false;

    $: top = `${cardY}px`;
    $: left = `${cardX}px`;

    onMount(() => {
        // set up the event listeners
        titleBar.onmousedown = (ev: MouseEvent) => {

            if (!hoverClose && !hoverMinimize) {
                isDragging = true;
                // set mouse move
                document.onmousemove = (ev: MouseEvent) => {
                    let e = ev; //|| window.event;
                    e.preventDefault();
                    let currentMouseX = e.x;
                    let currentMouseY = e.y;
                    if (previousMouseX !== null && previousMouseY !== null) {
                        let moveX = currentMouseX - previousMouseX;
                        let moveY = currentMouseY - previousMouseY;
                        cardX += moveX;
                        cardY += moveY;
                    }
                    previousMouseX = currentMouseX;
                    previousMouseY = currentMouseY;
                };
                document.onmouseup = (ev: MouseEvent) => {
                    isDragging = false;
                    // remove mouse move
                    document.onmousemove = null;
                    document.onmouseup = null;
                    previousMouseX = null;
                    previousMouseY = null;
                };
            }
        };
    })

    function handleMinimize(event: Event) {
        if (!isMinimized) {
            isMinimized = true;
            tick();
            maxHeight = contentContainer.getBoundingClientRect().height;
        }
        else {
            isMinimized = false;
            tick();
            maxHeight += 200;
        }
    }

    function handleClose(event: Event) {}

    function drawer(node: HTMLElement, { duration }) {
		return {
			duration,
			css: (t: number, u: number) => {
				const eased = elasticIn(t);

				return `
					max-height: ${t * maxHeight}px;`
			}
		};
	}
</script>

<section
    style="top: {top}; left: {left};"
    class:cursor-move={isDragging}
    class:bg-gray-400={isDragging}
    class="draggable-card fixed max-w-md flex flex-col w-full shadow-xl bg-gray-700 overflow-hidden z-50 rounded-md object-contain"
    >
    <!-- title area -->
    <article
        bind:this={titleBar}
        class="flex rounded-t-md justify-between align-baseline"
        >
        <h1
            class="font-medium text-sm text-white whitespace-nowrap p-1 ml-4 overflow-hidden"
            >
            title
        </h1>
        <!-- Card Menu Button -->
        <div class="flex space-1 align-middle">
            <!-- Minimize Button -->
            {#if canMinimize}
            <button 
                on:click={handleMinimize}
                on:mouseenter={() => hoverMinimize = true}
                on:mouseleave={() => hoverMinimize = false}
                class="z-30 flex justify-around w-6 rounded-sm align-bottom"
                >
                <p
                    class="flex font-medium text-white text-sm m-auto"
                    >
                    {isMinimized? '+' : '-'}
                </p>
            </button>
            {/if}
            <!-- Close Button -->
            {#if canClose}
            <button
                on:click={handleClose}
                on:mouseenter={() => hoverClose = true}
                on:mouseleave={() => hoverClose = false}
                class="z-30 flex justify-around w-6 rounded-sm align-bottom"
                >
                <div
                    class="flex font-light text-sm text-white m-auto"
                    >
                    x
                </div>
            </button>
            {/if}
        </div>
    </article>
    <!-- content area -->
    {#if !isMinimized}
    <article
        class="overflow-hidden object-contain rounded-b-md border border-solid border-semiblack bg-white"
        class:border-gray-700={!isDragging}
        class:border-gray-400={isDragging}
        bind:this={contentContainer}
        in:drawer="{{duration: 500}}"
        out:drawer="{{duration: 250}}"
        >
        <slot name="content">
            <article
                class="flex flex-col space-y-2 px-4 py-4 rounded-b-md object-contain h-full bg-white"
                >
                <article class="flex pt-2 px-4 rounded-t">
                    <h1 class="font-medium text-lg">Placeholder</h1>
                </article>
            </article>
        </slot>
    </article>
    {/if}
</section>

<style scoped>
.draggable-card {
    max-height: 80%;
}
</style>
