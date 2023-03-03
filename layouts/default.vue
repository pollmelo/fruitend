<template>  
    <div>
      <header class="border-b-2 sticky top-0 z-10 bg-white">
        <nav class="container mx-auto p-4 flex items-center justify-between">
          <NuxtLink to="/">
            <img alt="POLLmelo logo" class=" rounded" src="~/assets/img/logoRect.png" width="150"/>
          </NuxtLink>
          <ul class="mx-10 flex gap-8 font-bold text-pomelo-red">
            <li><NuxtLink to="/about">About</NuxtLink></li>
          </ul>
        </nav>
      </header>
      <div>
        <slot/>
      </div>
    </div>
</template>