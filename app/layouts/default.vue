<template>
    <ClientOnly>
        <Nav />
        <main>
            <slot />
        </main>
        <footer>
            <FooterComments />
            <FooterFAQ />
            <FooterEnd />
        </footer>
    </ClientOnly>
</template>