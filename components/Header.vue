<template>
    <header class="bg-black w-full border-b border-state-200 py-6">
        <div class="container">
            <div class="flex justify-between items-center">
                <div>
                    <NuxtLink to="/" class="flex items-center text-white text-2xl font-bold">
                        <img src="/asset/images/naon.png" class="h-12 w-12" alt="">
                        <span>Goods</span>
                    </NuxtLink>
                </div>
                <nav class="flex items-center gap-6">
                    <NuxtLink to="/" class="text-base text-white">Home</NuxtLink>
                    <NuxtLink to="/product" class="text-base text-white">Product</NuxtLink>
                    <NuxtLink to="/about" class="text-base text-white">About</NuxtLink>
                    <NuxtLink to="/cart" class="text-base text-white">cart</NuxtLink>
                    <NuxtLink to="/about" class="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded text-white">Profile</NuxtLink>
                </nav>
            </div>
        </div>
    </header>
</template>