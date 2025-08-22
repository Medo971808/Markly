<template>
    <ClientOnly>
        <Nav />
        <main>
            <slot />
        </main>
        <FooterComments />
        <FooterFAQ />
        <FooterEnd />
    </ClientOnly>
</template>