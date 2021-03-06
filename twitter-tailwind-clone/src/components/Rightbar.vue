<template>
  <div
    class="md:block hidden w-1/3 h-full border-l border-lighter px-6 py-2 overflow-y-scroll relative"
  >
    <input
      type="text"
      class="rounded-full w-full p-2 bg-lighter focus:outline-none text-sm pl-12 mb-4"
      placeholder="Search Twitter"
    />
    <i
      class="fas fa-search absolute left-0 top-0 mt-5 ml-12 text-sm text-light"
    ></i>

    <div class="w-full rounded-lg bg-lightest">
      <div class="flex items-center justify-between p-3">
        <p class="text-lg font-bold">Trends for You</p>
        <i class="fas fa-cog text-lg text-blue"></i>
      </div>
      <button
        v-for="trend in trending"
        :key="trend.title"
        class="w-full flex justify-between p-3 hover:bg-lighter border-t border-lighter focus:outline-none"
      >
        <div class="">
          <p class="text-sm text-left leading-tight text-dark">
            {{ trend.top }}
          </p>
          <p class="font-bold text-left leading-tight">{{ trend.title }}</p>
          <p class="text-left leading-tight text-dark">{{ trend.bottom }}</p>
        </div>
        <i class="fas fa-angle-down text-lg text-dark"></i>
      </button>
      <button
        class="w-full p-3 hover:bg-lighter text-left text-blue border-t border-lighter focus:outline-none"
      >
        Show More
      </button>
    </div>

    <!-- Who to follow -->
    <div class="w-full rounded-lg bg-lightest mt-4">
      <div class="flex items-center justify-between p-3">
        <p class="text-lg font-bold">Who to follow</p>
      </div>
      <button
        v-for="friend in friends"
        :key="friend.name"
        class="w-full flex p-3 hover:bg-lighter border-t border-lighter focus:outline-none"
      >
        <img
          :src="`${'../img/' + friend.src}`"
          alt=""
          class="h-12 w-12 rounded-full border border-lighter"
        />
        <div class="ml-4">
          <p class="text-sm font-bold leading-tight">{{ friend.name }}</p>
          <p class="text-sm leading-tight">{{ friend.handle }}</p>
        </div>
        <button
          class="ml-auto text-sm text-blue py-1 px-4 rounded-full focus:outline-none border-2 border-blue"
        >
          Follow
        </button>
      </button>
      <button
        class="w-full p-3 hover:bg-lighter text-left text-blue border-t border-lighter focus:outline-none"
      >
        Show More
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      trending: [
        {
          top: "Trending in TX",
          title: "Gigi",
          bottom: "Trending with: Rip Gigi",
        },
        { top: "Music", title: "We Won", bottom: "135K Tweets" },
        { top: "Pop", title: "Blue Ivy", bottom: "40k tweets" },
        { top: "Trending in US", title: "Denim Day", bottom: "40k tweets" },
        { top: "Trending", title: "When Beyonce", bottom: "25.4k tweets" },
      ],
      friends: [
        { src: "elon.jpg", name: "Elon Musk", handle: "@teslaBoy" },
        { src: "monk.jpg", name: "Adrian Monk", handle: "@detective:)" },
        { src: "kevin.jpg", name: "Kevin Hart", handle: "@miniRock" },
      ],
    };
  },
};
</script>

<style>
</style>