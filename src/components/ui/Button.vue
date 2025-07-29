<script setup>
defineProps({
    label: {
        type: String,
        default: 'Button',
    },
    variant: {
        type: String,
        default: 'primary',
        validator: value => ['primary', 'secondary', 'danger'].includes(value),
    },
    size: {
        type: String,
        default: 'md',
        validator: value => ['sm', 'md', 'lg'].includes(value),
    },
    icon: {
        type: [String, Object],
        default: null,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
});

const variants = {
    primary: 'bg-sky-500 text-white hover:bg-sky-600',
    secondary: 'bg-gray-200 hover:bg-gray-300',
    danger: 'bg-red-500 text-white hover:bg-red-600',
};

const sizes = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-5 py-3 text-lg',
};

</script>
<template>
    <button
        :class="[
            'inline-flex items-center gap-2 font-medium rounded transition hover:cursor-pointer',
            sizes[size],
            variants[variant],
            disabled ? 'opacity-50 cursor-not-allowed' : '',
        ]"
        :disabled="disabled"
    >
        <component :is="icon" v-if="icon" class="h-5 w-5" />
        <span v-if="label">{{ label }}</span>
        <slot />
    </button>
</template>