# Breadcrumb

> Auto generate breadcrumbs according to the current page router

## Use

### Basic Use

::: demo Will be auto generated according to the current routes

<template>
  <ele-breadcrumb />
</template>

<script>
export default {}
</script>

:::

### Props

| Name            | Description                  | Type   | Options | Default           |
| :-------------- | :--------------------------- | :----- | :------ | :---------------- |
| routes          | current routes               | array  | -       | from `vue-router` |
| separator       | separator character          | string | -       | `/`               |
| separator-class | class name of icon separator | string | -       | -                 |
