<template>
  <i v-if="src" class="icon" v-html="src"></i>
</template>
<script>
/* eslint-disable vue/return-in-computed-property */
import icons from "@/helpers/icons.js";
export default {
  props: {
    name: { type: String, default: "" },
    color: {
      type: String,
      default: "",
    },
  },
  computed: {
    src() {
      if (this.name) {
        return icons[this.name];
      }
    },
  },
  mounted() {
    if (this.color) {
      this.$el?.firstElementChild?.querySelectorAll("path")?.forEach((item) => {
        if ([...item.attributes].find((attr) => attr.localName === "stroke")) {
          item.attributes.stroke.value = this.color;
        }
        if ([...item.attributes].find((attr) => attr.localName === "fill")) {
          item.attributes.fill.value = this.color;
        }
      });
    }
  },
};
</script>

<style lang="scss">
.icon {
  display: inline-flex;
  svg {
    width: 100%;
    height: 100%;
  }
}
</style>
