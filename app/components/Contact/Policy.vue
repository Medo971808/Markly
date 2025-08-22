<template>
    <section class="text-white px-6 pb-5 pt-20 mt-20">
        <section class="border-dashed border-[#262626] border-[5px] rounded-3xl">
            <section class="border-dashed border-[#262626] border-b-[5px] md:flex justify-between">
                <h3 class="text-3xl lg:m-10 mt-10 ml-10 uppercase">Return Policy</h3>
                <button class="lg:m-10 ml-10 my-5 bg-[#1F1F1F] w-[80%] lg:w-60 h-12 rounded-lg border-dashed border-[#262626] border-[5px]">Read Return Policy</button>
            </section>
            <section class="grid lg:grid-cols-3">
                <section class="flex items-center lg:border-r-[5px] border-b-[5px] lg:border-b-0 border-dashed border-[#262626] p-10">
                    <section class="rounded-full w-20 h-20 border-[5px] border-dashed border-[#262626] flex justify-center items-center">
                        <section class="rounded-full w-14 h-14 bg-[#1A1A1A] flex justify-center items-center">
                            <FontAwesomeIcon :icon="['fas', 'check-circle']" class="text-[#C2B4A3] text-2xl" />
                        </section>
                    </section>
                    <section>
                        <p class="text-xl ml-3">Eligibility</p>
                        <p class="ml-3 text-[#81807E] mt-1 text-sm">Items must be unused, tags attached.</p>
                    </section>
                </section>
                <section class="flex items-center lg:border-r-[5px] border-b-[5px] lg:border-b-0 border-dashed border-[#262626] p-10">
                    <section class="rounded-full w-20 h-20 border-[5px] border-dashed border-[#262626] flex justify-center items-center">
                        <section class="rounded-full w-14 h-14 bg-[#1A1A1A] flex justify-center items-center">
                            <FontAwesomeIcon :icon="['fas', 'cogs']" class="text-[#C2B4A3] text-2xl" />
                        </section>
                    </section>
                    <section>
                        <p class="text-xl ml-3">Process</p>
                        <p class="ml-3 text-[#81807E] mt-1 text-sm">Initiate returns through Center.</p>
                    </section>
                </section>
                <section class="flex items-center border-dashed border-[#262626] p-10">
                    <section class="rounded-full w-20 h-20 border-[5px] border-dashed border-[#262626] flex justify-center items-center">
                        <section class="rounded-full w-14 h-14 bg-[#1A1A1A] flex justify-center items-center">
                            <FontAwesomeIcon :icon="['fas', 'money-bill-wave']" class="text-[#C2B4A3] text-2xl" />
                        </section>
                    </section>
                    <section>
                        <p class="text-xl ml-3">Refund</p>
                        <p class="ml-3 text-[#81807E] mt-1 text-sm">Expect your payment in 7-10 days.</p>
                    </section>
                </section>
            </section>
        </section>
    </section>
    <section class="text-white px-6 pb-5 pt-20 mt-20">
        <section class="border-dashed border-[#262626] border-[5px] rounded-3xl">
            <section class="border-dashed border-[#262626] border-b-[5px] lg:flex justify-between">
                <h3 class="text-3xl lg:m-10 mt-10 ml-10 uppercase">Cancellation Policy</h3>
                <button class="lg:m-10 ml-10 my-5 bg-[#1F1F1F] w-[80%] lg:w-60 h-12 rounded-lg border-dashed border-[#262626] border-[5px]">Read Cancellation Policy</button>
            </section>
            <section class="grid lg:grid-cols-3">
                <section class="flex items-center lg:border-r-[5px] border-b-[5px] lg:border-b-0 border-dashed border-[#262626] p-10">
                    <section class="rounded-full w-20 h-20 border-[5px] border-dashed border-[#262626] flex justify-center items-center">
                        <section class="rounded-full w-14 h-14 bg-[#1A1A1A] flex justify-center items-center">
                            <FontAwesomeIcon :icon="['fas', 'clock']" class="text-[#C2B4A3] text-2xl" />
                        </section>
                    </section>
                    <section>
                        <p class="text-xl ml-3">Cancellation Window</p>
                        <p class="ml-3 text-[#81807E] mt-1 text-sm">Orders canceled within 24 hours.</p>
                    </section>
                </section>
                <section class="flex items-center lg:border-r-[5px] border-b-[5px] lg:border-b-0 border-dashed border-[#262626] p-10">
                    <section class="rounded-full w-20 h-20 border-[5px] border-dashed border-[#262626] flex justify-center items-center">
                        <section class="rounded-full w-14 h-14 bg-[#1A1A1A] flex justify-center items-center">
                            <FontAwesomeIcon :icon="['fas', 'cogs']" class="text-[#C2B4A3] text-2xl" />
                        </section>
                    </section>
                    <section>
                        <p class="text-xl ml-3">Cancellation Process</p>
                        <p class="ml-3 text-[#81807E] mt-1 text-sm">Visit our Order Management section.</p>
                    </section>
                </section>
                <section class="flex items-center border-dashed border-[#262626] p-10">
                    <section class="rounded-full w-20 h-20 border-[5px] border-dashed border-[#262626] flex justify-center items-center">
                        <section class="rounded-full w-14 h-14 bg-[#1A1A1A] flex justify-center items-center">
                            <FontAwesomeIcon :icon="['fas', 'money-bill-wave']" class="text-[#C2B4A3] text-2xl" />
                        </section>
                    </section>
                    <section>
                        <p class="text-xl ml-3">Refund Timeline</p>
                        <p class="ml-3 text-[#81807E] mt-1 text-sm">Canceled orders within 5-7 days.</p>
                    </section>
                </section>
            </section>
        </section>
    </section>
</template>