<template>
  <div>
    <el-table v-loading="table.loading" :data="table.data" border highlight-current-row>
      <el-table-column
        v-for="column in table.columns"
        :key="column.prop"
        :label="column.label"
        :prop="column.prop"
        :align="column.align"
        :min-width="column.minWidth"
      >
        <template #default="scope">
          <el-tag v-if="column.label === 'Status'" :type="statusFilter(scope.row[column.prop])">
            {{ scope.row[column.prop] }}
          </el-tag>
          <el-row v-else-if="column.label === 'Display Time'" justify="center" align="middle">
            <el-icon>
              <Clock />
            </el-icon>
            <span>
              {{ scope.row[column.prop] }}
            </span>
          </el-row>
          <div v-else>
            {{ column.prop ? scope.row[column.prop] : ++scope.$index }}
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import { Table } from '@/api'
import { Clock } from '@element-plus/icons-vue'

const table = reactive({
  loading: false,
  data: [],
  columns: [
    { label: 'Order', prop: '', minWidth: 50, align: 'center' },
    { label: 'Title', prop: 'title', minWidth: 600, align: 'left' },
    { label: 'Author', prop: 'author', minWidth: 100, align: 'center' },
    { label: 'Page Views', prop: 'pageviews', minWidth: 100, align: 'center' },
    { label: 'Status', prop: 'status', minWidth: 100, align: 'center' },
    { label: 'Display Time', prop: 'display_time', minWidth: 150, align: 'center' },
  ],
})

function fetchData() {
  table.loading = true
  Table.getList().then((res) => {
    table.data = res.data.items
    table.loading = false
  })
}

function statusFilter(status) {
  const statusMap = {
    published: 'success',
    draft: 'warning',
    deleted: 'danger',
  }
  return statusMap[status]
}

fetchData()
</script>
