<template>
  <div id="app" class="flex container h-screen w-full">
    <!-- Left Navbar (Menu, Account) -->
    <Leftbar :dropdown="dropdown" :id="id"></Leftbar>

    <!-- Main (Tweets) -->
    <div class="md:w-1/2 w-full h-full overflow-y-scroll">
      <div
        class="px-5 py-3 border-b border-lighter flex items-center justify-between"
      >
        <h1 class="text-xl font-bold">Home</h1>
        <i class="far fa-star text-xl text-blue"></i>
      </div>
      <div class="px-5 py-3 border-b-8 border-lighter flex">
        <div class="flex-none">
          <img
            src="../public/img/profile.png"
            alt=""
            class="flex-none w-12 h-12 rounded-full border border-lighter"
          />
        </div>
        <form
          action=""
          class="w-full px-4 relative"
          @submit.prevent="addNewTweet"
        >
          <textarea
            v-model="tweet"
            placeholder="What's happening?"
            class="w-full focus:outline-none mt-3 pb-3"
          ></textarea>
          <div class="flex items-center">
            <i class="text-lg text-blue mr-4 far fa-image"></i>
            <i class="text-lg text-blue mr-4 fas fa-film"></i>
            <i class="text-lg text-blue mr-4 far fa-chart-bar"></i>
            <i class="text-lg text-blue mr-4 far fa-smile"></i>
          </div>
          <button
            type="submit"
            class="absolute bottom-0 right-0 h-10 px-4 text-white hover:bg-darkblue bg-blue font-semibold focus:outline-none rounded-full"
          >
            Tweet
          </button>
        </form>
      </div>
      <div class="flex flex-col-reverse">
        <div
          class="w-full p-4 border-b hover:bg-lighter flex"
          v-for="(tweet, index) in tweets"
          :key="index"
        >
          <div class="flex-none mr-4">
            <img
              src="../public/img/profile.png"
              alt=""
              class="h-12 w-12 rounded-full flex-none"
            />
          </div>
          <div class="w-full">
            <div class="flex items-center w-full">
              <p class="font-semibold">Chandra Gie</p>
              <p class="text-sm text-dark ml-2">@chandragie</p>
              <p class="text-sm text-dark ml-2">1 sec</p>
              <i class="fas fa-angle-down text-sm text-dark ml-auto"></i>
            </div>
            <p class="py-2">{{ tweet.content }}</p>
            <div class="flex items-center justify-between w-full">
              <div class="flex items-center text-sm text-dark">
                <i class="far fa-comment mr-3"></i>
                <p class="">0</p>
              </div>
              <div class="flex items-center text-sm text-dark">
                <i class="fas fa-retweet mr-3"></i>
                <p class="">0</p>
              </div>
              <div class="flex items-center text-sm text-dark">
                <i class="fas fa-heart mr-3"></i>
                <p class="">0</p>
              </div>
              <div class="flex items-center text-sm text-dark">
                <i class="fas fa-share-square mr-3"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="w-full p-4 border-b hover:bg-lighter flex"
        v-for="(follow, index) in following"
        :key="index"
      >
        <div class="flex-none mr-4">
          <img
            :src="`${'../img/' + follow.src}`"
            alt=""
            class="h-12 w-12 rounded-full flex-none"
          />
        </div>
        <div class="w-full">
          <div class="flex items-center w-full">
            <p class="font-semibold">{{ follow.name }}</p>
            <p class="text-sm text-dark ml-2">{{ follow.handle }}</p>
            <p class="text-sm text-dark ml-2">{{ follow.time }}</p>
            <i class="fas fa-angle-down text-sm text-dark ml-auto"></i>
          </div>
          <p class="py-2">{{ follow.tweet }}</p>
          <div class="flex items-center justify-between w-full">
            <div class="flex items-center text-sm text-dark">
              <i class="far fa-comment mr-3"></i>
              <p class="">{{ follow.comments }}</p>
            </div>
            <div class="flex items-center text-sm text-dark">
              <i class="fas fa-retweet mr-3"></i>
              <p class="">{{ follow.retweets }}</p>
            </div>
            <div class="flex items-center text-sm text-dark">
              <i class="fas fa-heart mr-3"></i>
              <p class="">{{ follow.like }}</p>
            </div>
            <div class="flex items-center text-sm text-dark">
              <i class="fas fa-share-square mr-3"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Right Navbar (Trendings, Who to follow) -->
    <Rightbar></Rightbar>
  </div>
</template>

<script>
import Leftbar from "./components/Leftbar.vue";
import Rightbar from "./components/Rightbar.vue";
export default {
  name: "App",
  components: { Leftbar, Rightbar },
  data() {
    return {
      id: "home",
      dropdown: false,
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
      tweet: "",
    };
  },
  methods: {
    addNewTweet() {
      if (this.tweet) {
        this.tweets.push({ content: this.tweet });
        this.tweet = "";
      }
    },
  },
};
</script>

<style>
::-webkit-scrollbar {
  display: none;
}
</style>
