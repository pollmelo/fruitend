<template>  
    <div>
      <header>
        <NuxtLink to="/">
          <img alt="POLLmelo logo" class="m-3" height="100" src="~/assets/img/logoSquare.png" width="100"/>
        </NuxtLink>
        <hr class="h-px my-8 bg-gray-500 border-0 dark:bg-gray-800">
      </header>
      <div>
        <slot/>
      </div>
    </div>
</template>