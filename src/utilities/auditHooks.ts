import { CollectionAfterChangeHook, CollectionAfterDeleteHook, GlobalAfterChangeHook } from 'payload'

export const addAuditLog = (collectionName: string): CollectionAfterChangeHook => async ({
  doc,
  operation,
  req: { payload, user },
}) => {
  if (!user) return

  await payload.create({
    collection: 'audit-logs' as any,
    data: {
      user: user.id,
      action: operation === 'create' ? 'create' : 'update',
      collectionName,
      documentId: doc.id?.toString() || 'global',
      details: `O usuário ${user.email} ${operation === 'create' ? 'criou' : 'atualizou'} um item em ${collectionName}.`,
    },
  })
}

export const addDeleteAuditLog = (collectionName: string): CollectionAfterDeleteHook => async ({
  doc,
  req: { payload, user },
}) => {
  if (!user) return

  await payload.create({
    collection: 'audit-logs' as any,
    data: {
      user: user.id,
      action: 'delete',
      collectionName,
      documentId: doc.id?.toString(),
      details: `O usuário ${user.email} excluiu um item em ${collectionName}.`,
    },
  })
}

export const addGlobalAuditLog = (globalName: string): GlobalAfterChangeHook => async ({
  doc,
  req: { payload, user },
}) => {
  if (!user) return

  await payload.create({
    collection: 'audit-logs' as any,
    data: {
      user: user.id,
      action: 'update',
      collectionName: `Global: ${globalName}`,
      documentId: 'global',
      details: `O usuário ${user.email} atualizou as configurações de ${globalName}.`,
    },
  })
}
