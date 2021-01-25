<template>
  <div id="app" class="flex container h-screen w-full">
    <!-- Side Navbar -->
    <div
      class="lg:w-1/5 border-r border-lighter px-2 lg:px-6 py-2 flex flex-col justify-between"
    >
      <div>
        <button
          class="h-12 w-12 hover:bg-lightblue text-3xl rounded-full text-blue focus:outline-none"
        >
          <i class="fab fa-twitter"></i>
        </button>
        <div>
          <button
            v-for="tab in tabs"
            :key="tab.id"
            @click="id = tab.id"
            :class="
              `focus:outline-none flex items-center py-2 px-4 rounded-full hover:bg-lightblue mr-auto hover:text-blue ${
                id === tab.id ? 'text-blue' : ''
              }`
            "
          >
            <i :class="`${tab.icon} text-2xl mr-4 text-left`"></i>
            <p class="text-lg font-semibold text-left hidden lg:block">
              {{ tab.title }}
            </p>
          </button>
        </div>
        <button
          class="bg-blue text-white font-semibold rounded-full focus:outline-none w-12 h-12 lg:h-auto lg:w-full p-3 hover:bg-darkblue"
        >
          <p class="hidden lg:block">Tweet</p>
          <i class="fas fa-plus lg:hidden"></i>
        </button>
      </div>
      <div class="lg:w-full relative">
        <button
          @click="dropdown = true"
          class="flex items-center w-full rounded-full hover:bg-lightblue p-2  focus:outline-none"
        >
          <img
            src="../public/img/profile.png"
            alt=""
            class="h-10 w-10 rounded-full border border-lighter"
          />
          <div class="ml-4 hidden lg:w-full">
            <p class="text-sm font-bold leading-tight">Chandra Gie</p>
            <p class="text-sm leading-tight">@chandragie</p>
          </div>
          <i class="fas fa-angle-down ml-auto text-large"></i>
        </button>

        <!-- account pop up -->
        <div
          v-if="dropdown"
          class="absolute bottom-0 left-0 w-64 rounded-lg shadow-md border-lightest bg-white mb-16"
        >
          <button
            @click="dropdown = false"
            class="p-3 flex items-center w-full rounded-full focus:outline-none"
          >
            <img
              src="../public/img/profile.png"
              alt=""
              class="h-10 w-10 rounded-full border border-lighter"
            />
            <div class="ml-4">
              <p class="text-sm font-bold leading-tight">Chandra Gie</p>
              <p class="text-sm leading-tight">@chandragie</p>
            </div>
            <i class="fas fa-check ml-auto text-blue"></i>
          </button>
          <button
            @click="dropdown = false"
            class="hover:bg-lightest border-t border-lighter w-full text-left text-sm p-3 focus:outline-none"
          >
            Add an existing account
          </button>

          <button
            @click="dropdown = false"
            class="hover:bg-lightest border-t border-lighter w-full text-left text-sm p-3 focus:outline-none"
          >
            Log out @chandragie
          </button>
        </div>
      </div>
    </div>

    <!-- Tweet -->
    <div class="w-1/2 h-full"></div>

    <!-- Trending -->
    <div
      class="w-1/3 h-full border-l border-lighter px-6 py-2 overflow-y-scroll relative"
    >
      <input
        type="text"
        class="rounded-full w-full p-2 bg-lighter focus:outline-none text-sm pl-12"
        placeholder="Search Twitter"
      />
      <i
        class="fas fa-search absolute left-0 top-0 mt-5 ml-12 text-sm text-light"
      ></i>

      <div class="w-full rounded-lg bg-lightest p-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      tabs: [
        { icon: "fas fa-home", title: "Home", id: "home" },
        { icon: "fas fa-hashtag", title: "Explore", id: "explore" },
        { icon: "far fa-bell", title: "Notifications", id: "notifications" },
        { icon: "far fa-envelope", title: "Messages", id: "messages" },
        { icon: "far fa-bookmark", title: "Bookmarks", id: "bookmarks" },
        { icon: "fas fa-clipboard-list", title: "Lists", id: "lists" },
        { icon: "far fa-user", title: "Profile", id: "profile" },
        { icon: "fas fa-ellipsis-h", title: "More", id: "more" },
      ],
      id: "home",
      dropdown: false,
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
      following: [
        {
          src: "elon.jpg",
          name: "Elon Musk",
          handle: "@teslaBoy",
          time: "20 min",
          tweet: "Should I just quarantine on mars??",
          comments: "1,000",
          retweets: "550",
          like: "1,000,003",
        },
        {
          src: "kevin.jpg",
          name: "Kevin Hart",
          handle: "@miniRock",
          time: "55 min",
          tweet: "Should me and the rock do another sub-par movie together????",
          comments: "2,030",
          retweets: "50",
          like: "20,003",
        },
        {
          src: "elon.jpg",
          name: "Elon Musk",
          handle: "@teslaBoy",
          time: "1.4 hr",
          tweet: "Haha just made a flame thrower. Shld I sell them?",
          comments: "100,000",
          retweets: "1,000,002",
          like: "5,000,003",
        },
        {
          src: "elon.jpg",
          name: "Elon Musk",
          handle: "@teslaBoy",
          time: "1.4 hr",
          tweet: "Just did something crazyyyyyyy",
          comments: "100,500",
          retweets: "1,000,032",
          like: "5,000,103",
        },
      ],
      tweets: [{ content: "It is so nice outside!" }],
      tweet: { content: "" },
    };
  },
};
</script>
