import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  labels: {
    singular: 'Administrador',
    plural: 'Administradores',
  },
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  hooks: {
    afterLogin: [
      async ({ req: { payload, user } }) => {
        if (!user) return
        await payload.create({
          collection: 'audit-logs' as any,
          data: {
            user: user.id,
            action: 'login',
            collectionName: 'Administradores',
            details: `O administrador ${user.email} entrou no sistema.`,
          },
        })
      },
    ],
  },
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
}
