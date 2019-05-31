<<template>
    <div>
        <h1>
            center
            <button @click="logout">退出</button>
        </h1>
    </div>
</template>>
<script>
export default {
  name: "center",
  methods: {
    async logout() {
      let result = await this.$axios.get("/api2/users/logout");
      let data = result.data;
      if (data.status == 0) {
        this.$router.push("/mine/login");
      }
    }
  }
};
</script>

<style scoped>
</style>
