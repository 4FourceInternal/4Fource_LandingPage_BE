import type { Core } from '@strapi/strapi';

const CLIENTS_PAGE_UID = 'api::clients-page.clients-page';

async function enablePublicClientsPageAccess(strapi: Core.Strapi) {
  try {
    const publicRole = await strapi.db
      .query('plugin::users-permissions.role')
      .findOne({ where: { type: 'public' } });

    if (!publicRole) return;

    const action = `${CLIENTS_PAGE_UID}.find`;
    const existing = await strapi.db
      .query('plugin::users-permissions.permission')
      .findOne({
        where: { action, role: publicRole.id },
      });

    if (!existing) {
      await strapi.db.query('plugin::users-permissions.permission').create({
        data: { action, role: publicRole.id, enabled: true },
      });
      strapi.log.info(`[bootstrap] Public permission created: ${action}`);
    } else if (!existing.enabled) {
      await strapi.db.query('plugin::users-permissions.permission').update({
        where: { id: existing.id },
        data: { enabled: true },
      });
      strapi.log.info(`[bootstrap] Public permission enabled: ${action}`);
    }
  } catch (err) {
    strapi.log.warn('[bootstrap] Could not set clients-page public permissions:', err);
  }
}

export default {
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    await enablePublicClientsPageAccess(strapi);
  },
};
