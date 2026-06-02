const fr = {
    // Dashboard
    "dashboard_title": "Tableau de bord Tempvoice",
    "dashboard_description": "Bienvenue sur votre tableau de bord Tempvoice — gérez et personnalisez votre salon vocal.",
    "dashboard_create_link": "Votre voix, votre espace. Démarrez une salle sur https://discord.com/channels/{guildId}/{channelId}",
    "dashboard_footer": "Appuyez sur les boutons ci-dessous pour gérer votre salon vocal.",
    "name_desc": "Modifier le nom du salon vocal",
    "limit_desc": "Définir la limite d'utilisateurs pour le salon",
    "privacy_desc": "Ajuster les paramètres de confidentialité du salon",
    "dnd_desc": "Basculer le mode Ne Pas Déranger pour votre salon",
    "region_desc": "Changer la région vocale de votre salon",
    "trust_desc": "Autoriser des utilisateurs spécifiques à rejoindre et interagir dans le salon",
    "untrust_desc": "Retirer l'accès de confiance aux utilisateurs sélectionnés",
    "block_desc": "Empêcher des utilisateurs de voir ou rejoindre le salon",
    "unblock_desc": "Restaurer la visibilité et l'accès pour les utilisateurs débloqués",
    "bitrate_desc": "Ajuster la qualité audio de votre salon",
    "invite_desc": "Envoyer une invitation aux utilisateurs pour rejoindre votre salon vocal",
    "kick_desc": "Expulser des utilisateurs sélectionnés du salon vocal",
    "claim_desc": "Prendre possession du salon si le propriétaire est parti",
    "transfer_desc": "Attribuer la propriété du salon à un autre utilisateur",
    "delete_desc": "Supprimer votre salon vocal temporaire",
    "name": "Nom",
    "limit": "Limite",
    "privacy": "Confidentialité",
    "dnd": "NPD",
    "region": "Région",
    "trust": "Faire confiance",
    "untrust": "Retirer la confiance",
    "block": "Bloquer",
    "unblock": "Débloquer",
    "bitrate": "Débit",
    "invite": "Inviter",
    "kick": "Expulser",
    "claim": "Réclamer",
    "transfer": "Transférer",
    "delete": "Supprimer",

    // Delete
    "deleted": "Salon supprimé.",
    "log_deleted": "{channel} a été supprimé.",

    // DND
    "dnd_on": "Ne Pas Déranger est activé. Les autres peuvent rejoindre mais ne pourront pas parler ou interagir.",
    "dnd_off": "Ne Pas Déranger est désactivé. Les autres peuvent parler et interagir dans votre salon.",

    // Name
    "invalid_name": "Veuillez entrer un nom valide.",
    "channel_renamed": "Salon renommé en **{name}**.",
    "log_renamed": "{user} a renommé la salle en {name}",

    // Limit
    "invalid_limit": "La limite doit être entre 1 et 99.",
    "limit_updated": "Limite d'utilisateurs mise à jour : {limit}.",
    "log_limit": "{user} a défini la limite à {limit} dans {channel}.",

    // Claim
    "already_owner": "Vous êtes déjà le propriétaire de ce salon.",
    "owner_still_present": "Le propriétaire actuel est toujours présent dans le salon vocal.",
    "log_claimed": "{user} a revendiqué la propriété du salon vocal {channel}.",

    // Trust
    "trust_option": "Sélectionnez quelqu'un en qui vous avez confiance.",
    "trust_placeholder": "Sélectionner un utilisateur de confiance",
    "trusted": "Vous avez fait confiance à {user}. Ils peuvent maintenant rejoindre le salon.",
    "log_trust": "{user} a été approuvé dans {channel}.",

    // Untrust
    "untrust_option": "Sélectionnez quelqu'un à qui retirer la confiance.",
    "untrust_placeholder": "Sélectionner un utilisateur à défaire",
    "untrusted": "Vous avez retiré la confiance à {user}. Ils ne peuvent plus rejoindre le salon.",
    "log_untrust": "{user} n'est plus approuvé dans {channel}.",

    // Block
    "block_option": "Sélectionnez quelqu'un à bloquer.",
    "block_placeholder": "Sélectionner un utilisateur à bloquer",
    "blocked": "{user} a été bloqué(e) de la visualisation de ce salon.",
    "log_block": "{user} a été bloqué(e) depuis {channel}.",

    // Unblock
    "unblock_option": "Sélectionnez quelqu'un à débloquer.",
    "unblock_placeholder": "Sélectionner un utilisateur à débloquer",
    "unblocked": "{user} a été débloqué(e) et ses permissions ont été réinitialisées.",
    "log_unblock": "{user} a été débloqué(e) de {channel}.",

    // Transfer
    "transfer_option": "Sélectionnez quelqu'un à qui transférer la propriété.",
    "transfer_placeholder": "Choisir un nouveau propriétaire du salon",
    "no_user_to_transfer": "Il n'y a personne d'autre dans le salon pour transférer la propriété.",
    "log_transfer": "{user} a pris la propriété de {channel}.",

    // Kick
    "kick_option": "Sélectionnez quelqu'un à expulser.",
    "kick_placeholder": "Choisir un utilisateur à expulser",
    "user_not_found": "Utilisateur introuvable dans le salon.",
    "no_user_to_kick": "Il n'y a personne à expulser.",
    "log_kick": "{user} a été expulsé(e) de {channel}.",

    // Region
    "region_option": "Choisir une région vocale.",
    "region_placeholder": "Sélectionner une région",
    "region_updated": "Région mise à jour : {region}.",
    "error_region": "Une erreur est survenue lors de la mise à jour de la région.",
    "log_region": "{user} a changé la région en {region} dans {channel}.",

    // Bitrate
    "bitrate_option": "Choisir un débit.",
    "bitrate_placeholder": "Sélectionner un débit",
    "bitrate_updated": "Débit défini à {bitrate} kbps.",
    "error_bitrate": "Une erreur est survenue lors de la mise à jour du débit.",
    "log_bitrate": "{user} a changé le débit à {bitrate} kbps dans {channel}.",

    // Invite
    "invite_option": "Sélectionnez quelqu'un à inviter.",
    "invite_placeholder": "Inviter quelqu'un dans votre salon vocal",
    "invite_message": "Vous avez été invité à rejoindre un salon vocal : {name}\n{voiceLink}",
    "invited_user": "{user} a été invité.",
    "error_send_invite": "Impossible d'envoyer l'invitation à l'utilisateur.",
    "error_user_dms_closed": "Impossible d'envoyer un MP à cet utilisateur. Il peut avoir désactivé les MP ou être un bot.",
    "log_invite": "{user} a été invité dans {channel}.",

    // Privacy
    "privacy_option": "Définir la confidentialité — rendre public ou privé.",
    "privacy_placeholder": "Sélectionner une option de confidentialité",
    "privacy_lock_label": "Verrouiller",
    "privacy_lock_desc": "Seuls les utilisateurs approuvés peuvent rejoindre",
    "privacy_lock": "Salon verrouillé. Seuls les utilisateurs approuvés peuvent rejoindre.",
    "privacy_unlock_label": "Déverrouiller",
    "privacy_unlock_desc": "Tout le monde peut rejoindre votre salon vocal",
    "privacy_unlock": "Salon déverrouillé. Tout le monde peut rejoindre.",
    "privacy_invisible_label": "Invisible",
    "privacy_invisible_desc": "Seuls les utilisateurs approuvés peuvent voir votre salon vocal",
    "privacy_invisible": "Le salon est maintenant invisible aux autres.",
    "privacy_visible_label": "Visible",
    "privacy_visible_desc": "Tout le monde peut voir votre salon vocal",
    "privacy_visible": "Le salon est désormais visible par tous.",
    "privacy_closechat_label": "Fermer le chat",
    "privacy_closechat_desc": "Seuls les utilisateurs approuvés peuvent discuter",
    "privacy_closechat": "Le chat est fermé. Seuls vous et les utilisateurs approuvés pouvez discuter.",
    "privacy_openchat_label": "Ouvrir le chat",
    "privacy_openchat_desc": "Tout le monde peut envoyer des messages",
    "privacy_openchat": "Le chat est ouvert à tous.",
    "log_privacy": "{user} a changé la confidentialité en {value} dans {channel}.",

    // Voice State Update
    "log_left": "{user} a quitté {channel}.",
    "log_joined": "{user} a rejoint {channel}.",
    "log_switched": "{user} est passé de {from} à {to}.",
    "log_channel_already_deleted": "{channel} avait déjà été supprimé.",
    "log_channel_delete_failed": "Échec de la suppression de {channel}.",

    // General messages
    "not_owner": "Vous n'êtes pas le propriétaire de ce salon vocal.",
    "invalid_user": "Utilisateur invalide. Veuillez réessayer.",
    "not_in_channel": "Vous n'êtes pas dans un salon vocal.",
    "different_channel": "Vous ne pouvez pas utiliser cette fonctionnalité dans ce salon vocal.",
    "permissions_updated": "{user} a mis à jour les permissions dans {channel}.",
    "log_send_failed": "Échec de l'envoi du message de log : {error}",
    "missing_lang_key": "Clé de traduction manquante : {key}",
    "failed_load_modal": "Impossible de charger la modal : {file}",
    "interaction_timeout": "Interaction expirée pour cause d'inactivité.",
    "error_interaction": "Une erreur est survenue. Veuillez réessayer plus tard.",
    "interaction_already_active": "Il y a déjà une interaction active. Veuillez la terminer avant d'en démarrer une nouvelle.",
    "invalid_category": "CATEGORY_CHANNEL_ID est invalide ou n'est pas une catégorie.",
    "invalid_embed": "EMBED_CHANNEL_ID est invalide ou n'est pas un canal texte.",
    "invalid_voice": "VOICE_CHANNEL_ID est invalide ou n'est pas un canal vocal."
}

export default fr
