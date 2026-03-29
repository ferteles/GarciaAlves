import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  labels: {
    singular: { pt: 'Mídia/Arquivo', en: 'Media' },
    plural: { pt: 'Mídias', en: 'Media' },
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: {
    staticDir: process.env.MEDIA_DIR || 'media',
  },
}
