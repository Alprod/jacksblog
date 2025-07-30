<script setup>
import Button from '../components/ui/Button.vue';
import { PlusIcon, CheckIcon, XMarkIcon, QuestionMarkCircleIcon, NoSymbolIcon } from '@heroicons/vue/24/outline';
</script>
<template>
    <h1 class="text-9xl font-black font-stretch-extra-expanded">JackyBlog</h1>
    <div class=" py-2">
        <Button :icon="PlusIcon" label="Ajouter" variant="primary" size="sm" /> 
        <Button :icon="PlusIcon" label="ajouter" variant="primary" size="md" /> 
        <Button :icon="PlusIcon" label="ajouter" variant="primary" size="lg" /> 
    </div>
    <div class="py-2">
        <Button :icon="QuestionMarkCircleIcon" label="Information" variant="secondary" size="sm" /> 
        <Button :icon="QuestionMarkCircleIcon" label="Information" variant="secondary" size="md" /> 
        <Button :icon="QuestionMarkCircleIcon" label="Information" variant="secondary" size="lg" /> 
    </div>
    <div class="py-2">
        <Button :icon="XMarkIcon" label="Supprimer" variant="danger" size="sm" />
        <Button :icon="XMarkIcon" label="Supprimer" variant="danger" size="md" />
        <Button :icon="XMarkIcon" label="Supprimer" variant="danger" size="lg" />
    </div>
    <div class="py-2">
        <Button :icon="NoSymbolIcon" label="Attention" variant="warning" size="sm" />
        <Button :icon="NoSymbolIcon" label="Attention" variant="warning" size="md" />
        <Button :icon="NoSymbolIcon" label="Attention" variant="warning" size="lg" />
    </div>
    <div class="py-2">
        <Button :icon="CheckIcon" label="Validez" variant="success" size="sm" />
        <Button :icon="CheckIcon" label="Validez" variant="success" size="md" />
        <Button :icon="CheckIcon" label="Validez" variant="success" size="lg" />
    </div>
</template>