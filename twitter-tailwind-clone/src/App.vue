<template>
  <div id="app" class="flex container h-screen w-full">
    <!-- Side Navbar -->
    <div
      class="w-1/5 border-r border-lighter px-8 py-2 flex flex-col justify-between"
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
            <p class="text-lg font-semibold text-left">{{ tab.title }}</p>
          </button>
        </div>
        <button
          class="bg-blue text-white font-semibold rounded-full focus:outline-none w-full p-3 hover:bg-darkblue"
        >
          Tweet
        </button>
      </div>
      <div class="w-full relative">
        <button
          class="flex items-center w-full rounded-full hover:bg-lightblue p-2  focus:outline-none"
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
          <i class="fas fa-angle-down ml-auto text-large"></i>
        </button>

        <!-- account pop up -->
        <div
          class="absolute bottom-0 left-0 w-64 rounded-lg shadow-md border-lightest bg-white mb-16"
        >
          <button
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
            class="hover:bg-lightest border-t border-lighter w-full text-left text-sm p-3"
          >
            Add an existing account
          </button>

          <button
            class="hover:bg-lightest border-t border-lighter w-full text-left text-sm p-3"
          >
            Log out @chandragie
          </button>
        </div>
      </div>
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
    };
  },
};
</script>
