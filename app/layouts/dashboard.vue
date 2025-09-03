<template>
    <ClientOnly>
        <DashboardNav />
        <section class="lg:ml-60">
            <main>
                <section class="text-white px-6 pb-10 pt-20 lg:pt-10">
                    <slot />
                </section>
            </main>
            <footer>
                <FooterComments />
                <FooterFAQ />
                <FooterEnd />
            </footer>
        </section>
    </ClientOnly>
</template>
