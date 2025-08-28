<script setup>
defineProps({
    type: {
        type: String,
        default: 'submit',
    },
    label: {
        type: String,
        default: 'Button',
    },
    variant: {
        type: String,
        default: 'primary',
        validator: value => ['primary', 'secondary', 'danger', 'warning', 'success'].includes(value),
    },
    size: {
        type: String,
        default: 'md',
        validator: value => ['sm', 'md', 'lg'].includes(value),
    },
    icon: {
        type: [Object, Function],
        default: null,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
});

const variants = {
    primary: 'bg-sky-500 text-white hover:bg-sky-600',
    secondary: 'bg-gray-400 hover:bg-gray-600',
    success: 'bg-green-600 text-white hover:bg-green-700',
    warning: 'bg-yellow-500 text-white hover:bg-yellow-600',
    danger: 'bg-red-500 text-white hover:bg-red-700',
};

const sizes = {
    sm: 'px-3 py-1 my-2 text-sm',
    md: 'px-4 py-2 my-2 text-base',
    lg: 'px-5 py-3 my-2 text-lg',
};

</script>
<template>
    <button
        :type="type"
        :class="[
            'inline-flex items-center gap-2 font-medium rounded-lg transition',
            sizes[size],
            variants[variant],
            disabled ? 'opacity-50 hover:cursor-not-allowed' : 'hover:cursor-pointer',
        ]"
        :disabled="disabled"
    >
        <component :is="icon" v-if="icon" class="h-5 w-5" />
        <span v-if="label">{{ label }}</span>
        <slot />
    </button>
</template>