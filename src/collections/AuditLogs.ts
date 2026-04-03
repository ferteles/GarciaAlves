import type { CollectionConfig } from 'payload'

export const AuditLogs: CollectionConfig = {
  slug: 'audit-logs',
  labels: {
    singular: 'Registro de Atividade',
    plural: 'Registros de Atividade',
  },
  admin: {
    useAsTitle: 'action',
    defaultColumns: ['user', 'action', 'collectionName', 'createdAt'],
  },
  access: {
    read: ({ req: { user } }) => !!user,
    create: () => false, // Only system can create via hooks
    update: () => false, // No editing logs
    delete: () => false, // No deleting logs
  },
  fields: [
    {
      name: 'user',
      label: 'Administrador',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'action',
      label: 'Ação',
      type: 'select',
      options: [
        { label: 'Login', value: 'login' },
        { label: 'Criação', value: 'create' },
        { label: 'Atualização', value: 'update' },
        { label: 'Exclusão', value: 'delete' },
      ],
      required: true,
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'collectionName',
      label: 'Área (Coleção)',
      type: 'text',
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'documentId',
      label: 'ID do Documento',
      type: 'text',
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'details',
      label: 'Detalhes',
      type: 'textarea',
      admin: {
        readOnly: true,
      },
    },
  ],
  timestamps: true,
}
