<script setup>
import { PhAirplaneTilt } from "@phosphor-icons/vue";
import { vTooltip } from 'floating-vue';
import { computed, nextTick, shallowRef } from 'vue';

const { destination } = defineProps(['destination'])
const {
  tags,
  previewPhotos,
  name,
  description,
  communityRatings
} = destination || {};

// State
const hoveredRating = shallowRef(0)
const selectedRating = shallowRef(0)
const photoIndex = shallowRef(0)
const isWiggling = shallowRef(false);

// Tailwind dynamic classes
const tagsDelay = computed(() => (index) => {
  switch (index) {
    case 0:
      return "group-hover:delay-[200ms]";
    case 1:
      return "group-hover:delay-[350ms]"
  }
})
const avatarDelay = computed(() => (index) => {
  switch (index) {
    case 0:
      return "group-hover:delay-[500ms]";
    case 1:
      return "group-hover:delay-[550ms]"
    case 2:
      return "group-hover:delay-[600ms]"
    case 3:
      return "group-hover:delay-[650ms]"
  }
})
const ratingStarColor = computed(() => (index) => index <= (hoveredRating.value || selectedRating.value) ? 'text-green-500' : "text-gray-300")
const photoTranslate = computed(() => (index) => {
  if (index === photoIndex.value) return "translate-x-0";
  if (index <= photoIndex.value) return "-translate-x-[112%]"
})
const photoZindex = computed(() => (index) => {
  switch (index) {
    case 0: return 'z-50';
    case 1: return 'z-40';
    case 2: return 'z-30';
    case 3: return 'z-20';
    case 4: return 'z-10';
    default: return 'z-0';
  }
})

// Logical functions
const rate = (index) => {
  if (index === selectedRating.value) return;

  selectedRating.value = index;

  isWiggling.value = true;

  nextTick(() => {
    setTimeout(() => {
      isWiggling.value = false;
    }, 600); // Animation duration
  });

  // TODO API POST
}
const navigatePhoto = (index) => {
  photoIndex.value = index
}

</script>

<template>
  <section v-if="destination"
    :class="['group relative w-96 scale-75 sm:scale-100 rounded-lg flex flex-col gap-y-3 before:absolute before:inset-0 before:bg-white before:rounded-lg before:scale-y-[0.64] before:z-0 before:origin-top-left hover:before:scale-y-100 before:transition before:ease-in-out before:duration-500', { 'animate-wiggle': isWiggling }]">

    <div class="z-10 relative">
      <ul class="z-0 overflow-hidden relative -mt-20 h-96 transition-transform duration-500 translate-x-100">
        <li v-for="({ src, alt }, index) in previewPhotos" :key="index"
          :class="`overflow-hidden h-full absolute inset-x-5 inset-y-0 transition-transform duration-700 ${photoTranslate(index)} ${photoZindex(index)} group-hover:scale-[1.12]`">
          <img class="w-full h-full object-cover rounded-lg shadow-lg" :src :alt />
        </li>
      </ul>
      <!-- <img
        class="w-full z-10 h-96 -mt-20 rounded-lg shadow-lg object-cover transition-transform group-hover:scale-[1.12] duration-500"
        :src="previewSrc" :alt="previewAlt" /> -->
      <ul
        class="transition-opacity opacity-0 absolute bottom-3 flex gap-x-2 items-center justify-center w-full group-hover:opacity-100">
        <li v-for="(_, index) in previewPhotos" :key="index"
          :class="['w-6 h-2 bg-gray-200 rounded-full hover:bg-green-500 duration-700 cursor-pointer', { 'bg-green-500': index === photoIndex }]"
          @click="navigatePhoto(index)">
        </li>
      </ul>
    </div>

    <div class="px-5 pb-5 z-10">

      <ul class="flex space-x-2 mb-4 mt-1">
        <li v-for="({ label, link }, index) in tags" :key="index">
          <a :href="link"
            :class="`transition px-2 py-1 bg-gray-200 text-gray-700 text-sm font-semibold -translate-y-2 group-hover:translate-y-0 rounded-full opacity-0 !delay-0 group-hover:opacity-100 group-hover:duration-500 hover:delay-0 hover:duration-100 hover:bg-zinc-900 hover:text-gray-200 ${tagsDelay(index)}`">{{
              label }}</a>
        </li>
      </ul>

      <div
        class="gap-x-3 flex justify-between items-center mb-2 -translate-y-11 duration-500 group-hover:translate-y-0">

        <h2 contenteditable="true"
          class="text-2xl duration-500 transition-[font-variation-settings] group-hover:[font-variation-settings:'wght'_600]">
          {{ name }}
        </h2>

        <!-- Rating UI and logic could be wrap into a form custom component -->
        <div class="flex">
          <template v-for="index in 5" :key="index">
            <svg
              :class="`w-4 h-4 transition duration-500 fill-current hover:scale-[1.2] cursor-pointer ${ratingStarColor(index)}`"
              @mouseenter="hoveredRating = index" @mouseleave="hoveredRating = 0" @click="rate(index)"
              viewBox="0 0 24 24">
              <path
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
            </svg>
          </template>
        </div>
      </div>

      <p contenteditable="true"
        class="text-gray-600 text-base opacity-0 -translate-x-3 transition delay-0 duration-500 group-hover:opacity-100 group-hover:translate-x-0 group-hover:delay-200">
        {{ description }}
      </p>

      <div
        class="w-full h-px bg-gray-200 mt-4 mb-2 duration-0 origin-left delay-0 scale-x-0 group-hover:scale-x-100 group-hover:delay-500 group-hover:duration-700">
      </div>

      <div class="flex items-center justify-between mt-3">

        <ul class="inline-flex items-center">
          <li v-tooltip="description" :instantMove="true"
            :class="`overflow-hidden rounded-full w-[3ch] h-[3ch] -ml-3 first:ml-0 opacity-0 transition delay-0 duration-0 group-hover:opacity-100 group-hover:duration-500 ${avatarDelay(index)} border-2 border-white transition hover:delay-0 hover:scale-[1.2]`"
            v-for="({ avatarSrc, description }, index) in communityRatings" :key="index">
            <img :src="avatarSrc" />
          </li>
        </ul>

        <a href="#"
          class="flex flex-row gap-x-1 items-center text-sm opacity-0 -translate-x-3 transition delay-0 duration-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:delay-500 group-hover:duration-500">
          Explorer
          <PhAirplaneTilt :size="22"
            class="transition opacity-0 -translate-x-1 translate-y-1 delay-0 duration-0 group-hover:delay-700 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:duration-500 hover:translate-x-1 hover:-translate-y-1" />
        </a>

      </div>
    </div>
  </section>
</template>