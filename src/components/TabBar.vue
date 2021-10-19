<template>
  <div class="tab-bar">
    <!--匿名插槽-->
    <slot></slot>
  </div>
</template>

<script>
export default {
    name:'TabBar'
};
</script>

<style>
/*底部bar样式 */
.tab-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
  border-top: 2px solid #cdda1d;
  display: flex; /*弹性伸缩盒显示 */
  background-color: #1cf1cd;
}
</style>