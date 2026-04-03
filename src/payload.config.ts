import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { s3Storage } from '@payloadcms/storage-s3'
import { pt } from '@payloadcms/translations/languages/pt'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Posts } from './collections/Posts'
import { HomePage } from './globals/HomePage'
import { MainMenu } from './globals/MainMenu'
import { Footer } from './globals/Footer'
import { WhatsApp } from './globals/WhatsApp'
import { Seo } from './globals/Seo'
import { AuditLogs } from './collections/AuditLogs'
import { addAuditLog, addDeleteAuditLog, addGlobalAuditLog } from './utilities/auditHooks'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  i18n: {
    fallbackLanguage: 'pt',
    supportedLanguages: { pt },
  },
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    components: {
      graphics: {
        Logo: '@/components/admin/Logo#Logo',
        Icon: '@/components/admin/Logo#Logo',
      },
    },
  },
  collections: [
    { ...Users, hooks: { ...Users.hooks, afterChange: [...(Users.hooks?.afterChange || []), addAuditLog('Administradores')], afterDelete: [...(Users.hooks?.afterDelete || []), addDeleteAuditLog('Administradores')] } }, 
    { ...Media, hooks: { ...Media.hooks, afterChange: [...(Media.hooks?.afterChange || []), addAuditLog('Mídia')], afterDelete: [...(Media.hooks?.afterDelete || []), addDeleteAuditLog('Mídia')] } }, 
    { ...Posts, hooks: { ...Posts.hooks, afterChange: [...(Posts.hooks?.afterChange || []), addAuditLog('Posts')], afterDelete: [...(Posts.hooks?.afterDelete || []), addDeleteAuditLog('Posts')] } },
    AuditLogs
  ],
  globals: [
    { ...HomePage, hooks: { ...HomePage.hooks, afterChange: [...(HomePage.hooks?.afterChange || []), addGlobalAuditLog('Página Inicial')] } },
    { ...MainMenu, hooks: { ...MainMenu.hooks, afterChange: [...(MainMenu.hooks?.afterChange || []), addGlobalAuditLog('Menu Principal')] } },
    { ...Footer, hooks: { ...Footer.hooks, afterChange: [...(Footer.hooks?.afterChange || []), addGlobalAuditLog('Rodapé')] } },
    { ...WhatsApp, hooks: { ...WhatsApp.hooks, afterChange: [...(WhatsApp.hooks?.afterChange || []), addGlobalAuditLog('WhatsApp')] } },
    { ...Seo, hooks: { ...Seo.hooks, afterChange: [...(Seo.hooks?.afterChange || []), addGlobalAuditLog('SEO')] } }
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'garcia-alves-secret-key',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URL || 'file:./garcia-alves.db',
    },
    push: true,
    migrationDir: path.resolve(dirname, 'migrations'),
  }),
  sharp,
  plugins: process.env.S3_BUCKET ? [
    s3Storage({
      collections: {
        ['media']: true,
      },
      bucket: process.env.S3_BUCKET,
      config: {
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID!,
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY!,
        },
        region: process.env.S3_REGION || 'us-east-1',
        endpoint: process.env.S3_ENDPOINT!,
        forcePathStyle: true,
      },
    }),
  ] : [],
})
