<script setup>
import DestinationCard from './components/DestinationCard.vue';

const destinations = [
  {
    id: 1,
    name: "Montpellier",
    description: "Découvrez cette magnifique ville du sud de la France, réputée pour son architecture historique, ses places animées et son ambiance méditerranéenne.",
    previewPhotos: [
      {
        src: "/images/montpellier-1.webp",
        alt: "Montpellier photo 1 alt",
      },
      {
        src: "/images/montpellier-2.webp",
        alt: "Montpellier photo 2 alt",
      },
      {
        src: "/images/montpellier-3.webp",
        alt: "Montpellier photo 3 alt",
      }
    ],
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
  // {
  //   id: 2,
  //   name: "Château de Versailles qsdf qsdf qsfd",
  //   description: "Explorez l'opulence royale dans ce palais historique et ses jardins somptueux. Ancienne résidence des rois de France, le Château de Versailles est un chef-d'œuvre de l'architecture baroque.",
  //   previewPhotos: [
  //     {
  //       src: "/images/versailles-1.webp",
  //       alt: "Versailles photo 1 alt",
  //     },
  //     {
  //       src: "/images/versailles-2.webp",
  //       alt: "Versailles photo 2 alt",
  //     },
  //     {
  //       src: "/images/versailles-3.webp",
  //       alt: "Versailles photo 3 alt",
  //     }
  //   ],
  //   tags: [
  //     { label: "France", link: "/#" },
  //     { label: "Histoire", link: "/#" }
  //   ],
  //   communityRatings: [
  //     { name: "Sophie", description: "Magnifique architecture", avatarSrc: "https://i.pravatar.cc/100" },
  //     { name: "Pierre", description: "Une visite incontournable", avatarSrc: "https://i.pravatar.cc/100" },
  //     { name: "Marie", description: "Jardins impressionnants", avatarSrc: "https://i.pravatar.cc/100" },
  //     { name: "Luc", description: "Riche en histoire", avatarSrc: "https://i.pravatar.cc/100" },
  //   ]
  // },
  // {
  //   id: 3,
  //   name: "Machu Picchu",
  //   description: "Découvrez cette ancienne cité inca perchée dans les montagnes des Andes péruviennes. Classé au patrimoine mondial de l'UNESCO, Machu Picchu est une merveille archéologique et un témoignage fascinant de la civilisation inca.",
  //   previewPhotos: [
  //     {
  //       src: "/images/machu-picchu-1.webp",
  //       alt: "Machu Picchu photo 1 alt",
  //     },
  //     {
  //       src: "/images/machu-picchu-2.webp",
  //       alt: "Machu Picchu photo 2 alt",
  //     },
  //   ],
  //   tags: [
  //     { label: "Pérou", link: "/#" },
  //     { label: "Patrimoine", link: "/#" }
  //   ],
  //   communityRatings: [
  //     { name: "Maria", description: "Vue spectaculaire", avatarSrc: "https://i.pravatar.cc/100" },
  //     { name: "Carlos", description: "Expérience inoubliable", avatarSrc: "https://i.pravatar.cc/100" },
  //     { name: "Lucia", description: "Site mystique", avatarSrc: "https://i.pravatar.cc/100" },
  //     { name: "Pedro", description: "Histoire fascinante", avatarSrc: "https://i.pravatar.cc/100" },
  //   ]
  // }
]
</script>

<template>
  <main class="h-dvh w-dvw bg-zinc-900 flex flex-row items-center gap-x-8 justify-center content-start">
    <DestinationCard v-for="destination in destinations" :key="destination.id" :destination />
  </main>
</template>
