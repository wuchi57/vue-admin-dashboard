<template>
  <div>
    <el-input v-model="filterText" placeholder="Filter keyword" />
    <el-tree
      ref="treeRef"
      :data="data"
      :props="defaultProps"
      default-expand-all
      :filter-node-method="filterNode"
      style="margin-top: 30px"
    >
    </el-tree>
  </div>
</template>

<script setup>
const treeRef = ref()
const filterText = ref()
const data = ref([
  {
    id: 1,
    label: 'Level one 1',
    children: [
      {
        id: 4,
        label: 'Level two 1-1',
        children: [
          {
            id: 9,
            label: 'Level three 1-1-1',
          },
          {
            id: 10,
            label: 'Level three 1-1-2',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: 'Level one 2',
    children: [
      {
        id: 5,
        label: 'Level two 2-1',
      },
      {
        id: 6,
        label: 'Level two 2-2',
      },
    ],
  },
  {
    id: 3,
    label: 'Level one 3',
    children: [
      {
        id: 7,
        label: 'Level two 3-1',
      },
      {
        id: 8,
        label: 'Level two 3-2',
      },
    ],
  },
])
const defaultProps = ref({
  children: 'children',
  label: 'label',
})

watch(
  () => filterText.value,
  (val) => {
    treeRef.value.filter(val)
  }
)

function filterNode(value, data) {
  if (!value) return true
  return data.label.indexOf(value) !== -1
}
</script>
