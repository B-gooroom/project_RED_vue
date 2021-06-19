<template>
  <header>
    <div class="logo">
      RED
    </div>
    <div>
      <!-- <a href="./index.html" class="active" id="menu-a-home"><span class="material-icons-outlined">home</span></a> -->
      <router-link :to="{name: 'Home'}" active-class="active"><span class="material-icons-outlined">home</span></router-link>
  
    </div>
    <div>
      <!-- <a href="./groceries.html" id="menu-a-groceries"><span class="material-icons-outlined">fact_check</span></a> -->
      <router-link :to="{name: 'Groceries'}" active-class="active"><span class="material-icons-outlined">fact_check</span></router-link>
    </div>
    <div class="menu-items">
      <!-- <a href="./items.html" id="menu-a-items"><span class="material-icons">list</span></a> -->
      <router-link :to="{name: 'Items'}" active-class="active"><span class="material-icons">list</span></router-link>
      <div><span id="menu-items-counter">1</span></div>
    </div>
  </header>
</template>
