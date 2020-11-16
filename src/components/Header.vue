<template>
  <div>
    <a-page-header
        style="border: 1px solid rgb(235, 237, 240)"
        title="Title"
        sub-title="This is a subtitle"
    >
      <template slot="extra">
        <a-icon type="linkedin" />
      </template>
    </a-page-header>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>
