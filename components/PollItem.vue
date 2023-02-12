<template>
    <br>
    <div class="px-2">
        <div class="flex flex-wrap -mx-2">
            <div class="w-1/4">
            </div>
            <div class="w-1/2 flex-none">
                <div class="container flex-wrap items-center bg-pomelo-grey w-1/4 p-6 min-w-fit">
                    <div class="font-bold w-full p-2 bg-white border-2 border-pomelo-red">
                        Abstimmungstitel Platzhalter für Abstimmung mit der ID {{ id }}
                    </div>
                    <div class="h-60 mt-2 w-full p-2 bg-white border-2 border-pomelo-red">
                        Das ist die Beschreibung der Abstimmung. Das ist die Beschreibung der Abstimmung. Das ist die
                        Beschreibung der Abstimmung.
                    </div>
                    <div class="flex flex-row pt-10">
                        <div class="flex-col w-1/5 mr-auto bg-white p-2">
                            endet am: 07.07.2023
                        </div>
                        <div class="flex-col">
                            <Icon :class="['text-green-900', 'hover:text-green-700']" :name="'bi:hand-thumbs-up-fill'"
                                :size="'2em'" />
                            <label class="text-center">50</label>
                        </div>
                        <div class="flex-col px-10">
                            <Icon :class="['text-red-900', 'hover:text-red-700']" :name="'bi:hand-thumbs-down-fill'"
                                :size="'2em'" />
                            <label class="text-center">20</label>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="w-1/4">
            </div>
        </div>
    </div>


</template>

<script setup>
    const { id } = useRoute().params;

</script>

<style scoped>

</style>