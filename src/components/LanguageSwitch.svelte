<script lang="ts">
import I18nKey from '@i18n/i18nKey'
import { i18n } from '@i18n/translation'
import Icon from '@iconify/svelte'
import {
  getLanguage,
  setLanguage,
} from '@utils/setting-utils.ts'
import { onMount } from 'svelte'

const seq: string[] = ["en", "de"]
let lang: string = "en"

onMount(() => {
  lang = getLanguage()
})

function switchLanguage(newLang: string) {
  lang = newLang
  setLanguage(newLang)
}

function toggleLang() {
  let i = 0
  for (; i < seq.length; i++) {
    if (seq[i] === lang) {
      break
    }
  }
  switchLanguage(seq[(i + 1) % seq.length])
}

function showPanel() {
  const panel = document.querySelector('#language-panel')
  panel.classList.remove('float-panel-closed')
}

function hidePanel() {
  const panel = document.querySelector('#language-panel')
  panel.classList.add('float-panel-closed')
}
</script>

<!-- z-50 make the panel higher than other float panels -->
<div class="relative z-50" role="menu" tabindex="-1" on:mouseleave={hidePanel}>
    <button aria-label="Language" role="menuitem" class="relative btn-plain scale-animation rounded-lg h-11 w-11 active:scale-90" id="scheme-switch" on:click={toggleLang} on:mouseenter={showPanel}>
        <div class="absolute" class:opacity-0={lang !== "en"}>
            <Icon icon="svelte-flag-icons:gb" class="text-[1.25rem]"></Icon>
        </div>
        <div class="absolute" class:opacity-0={lang !== "de"}>
            <Icon icon="" class="text-[1.25rem]"></Icon>
        </div>
    </button>

    <div id="language-panel" class="hidden lg:block absolute transition float-panel-closed top-11 -right-2 pt-5" >
        <div class="card-base float-panel p-2">
            <button class="flex transition whitespace-nowrap items-center justify-start w-full btn-plain scale-animation rounded-lg h-9 px-3 font-medium active:scale-95 mb-0.5"
                    class:current-theme-btn={lang === "en"}
                    on:click={() => switchLanguage("en")}
            >
                <Icon icon="svelte-flag-icons:gb" class="text-[1.25rem] mr-3"></Icon>
                {i18n(I18nKey.english)}
            </button>
            <button class="flex transition whitespace-nowrap items-center justify-start w-full btn-plain scale-animation rounded-lg h-9 px-3 font-medium active:scale-95 mb-0.5"
                    class:current-theme-btn={lang === "de"}
                    on:click={() => switchLanguage("de")}
            >
                <Icon icon="material-symbols:dark-mode-outline-rounded" class="text-[1.25rem] mr-3"></Icon>
                {i18n(I18nKey.german)}
            </button>
        </div>
    </div>
</div>

<style lang="css">
.current-setting {
    background: var(--btn-plain-bg-hover);
    color: var(--primary);
}
</style>