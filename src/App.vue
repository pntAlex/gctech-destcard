<script setup>
import DestinationCard from './components/DestinationCard.vue';

const destinations = [
  {
    id: 1,
    name: "Montpellier",
    description: "Découvrez cette magnifique ville qu'en vrai je ne connais pas du tout",
    previewSrc: "/images/montpellier.webp",
    previewAlt: "Montpellier cathedral",
    tags: [
      { label: "France", link: "/#" },
      { label: "Ville", link: "/#" }
    ],
    communityRatings: [
      { name: "Alice", description: "un super endroit", avatarSrc: "https://i.pravatar.cc/100" },
      { name: "Bob", description: "un super endroit", avatarSrc: "https://i.pravatar.cc/100" },
      { name: "John", description: "un super endroit", avatarSrc: "https://i.pravatar.cc/100" },
      { name: "Alice", description: "un super endroit", avatarSrc: "https://i.pravatar.cc/100" },
    ]
  },
  {
    id: 2,
    name: "Château de Versailles",
    description: "Explorez l'opulence royale dans ce palais historique et ses jardins somptueux",
    previewSrc: "/images/versailles.webp",
    previewAlt: "Château de Versailles",
    tags: [
      { label: "France", link: "/#" },
      { label: "Histoire", link: "/#" }
    ],
    communityRatings: [
      { name: "Sophie", description: "Magnifique architecture", avatarSrc: "https://i.pravatar.cc/100" },
      { name: "Pierre", description: "Une visite incontournable", avatarSrc: "https://i.pravatar.cc/100" },
      { name: "Marie", description: "Jardins impressionnants", avatarSrc: "https://i.pravatar.cc/100" },
      { name: "Luc", description: "Riche en histoire", avatarSrc: "https://i.pravatar.cc/100" },
    ]
  },
  {
    id: 3,
    name: "Mont Saint-Michel",
    description: "Découvrez cette île pittoresque avec son abbaye médiévale emblématique",
    previewSrc: "/images/mont-saint-michel.webp",
    previewAlt: "Mont Saint-Michel",
    tags: [
      { label: "France", link: "/#" },
      { label: "Patrimoine", link: "/#" }
    ],
    communityRatings: [
      { name: "Claire", description: "Vue à couper le souffle", avatarSrc: "https://i.pravatar.cc/100" },
      { name: "Thomas", description: "Expérience unique", avatarSrc: "https://i.pravatar.cc/100" },
      { name: "Émilie", description: "Magique à marée haute", avatarSrc: "https://i.pravatar.cc/100" },
      { name: "Antoine", description: "Histoire fascinante", avatarSrc: "https://i.pravatar.cc/100" },
    ]
  }
]
</script>

<template>
  <main class="h-dvh w-dvw bg-zinc-900 flex flex-row items-center gap-x-8 justify-center">
    <DestinationCard v-for="destination in destinations" :key="destination.id" :destination />
  </main>
</template>

<style scoped></style>
