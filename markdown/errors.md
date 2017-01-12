# Error Codes

[[Edit on GitHub]](https://github.com/kaltura/kaltura-api-recipes/edit/development/swagger/markdown/errors.md)

* `CANNOT_RETRIEVE_ANOTHER_USER_USING_NON_ADMIN_SESSION` - cannot retrieve another user \"@USER_ID@\" using non-admin session
* `INTERNAL_SERVERL_ERROR` - Internal server error occurred
* `INTERNAL_SERVERL_ERROR_DEBUG` - Internal server error occurred \"@ERROR@\"
* `MISSING_KS` - Missing KS, session not established
* `INVALID_KS` - Invalid KS \"@KSID@\", Error \"@ERR_CODE@,@ERR_DESC@\"
* `SERVICE_NOT_SPECIFIED` - Service name was not specified, please specify one
* `SERVICE_DOES_NOT_EXISTS` - Service \"@SRV_NAME@\" does not exists
* `ACTION_NOT_SPECIFIED` - Action name was not specified, please specify one
* `ACTION_DOES_NOT_EXISTS` - Action \"@ACTION_NAME@\" does not exists for service \"@SERVICE_NAME@\"
* `ACTION_FORBIDDEN` - Action \"@ACTION_NAME@\" is forbidden for use
* `MISSING_MANDATORY_PARAMETER` - Missing parameter \"@PARAM_NAME@\"
* `INVALID_OBJECT_TYPE` - Invalid object type \"@INVALID_OBJ_TYPE@\"
* `INVALID_ENUM_VALUE` - Invalid enumeration value \"@ENUM_VAL@\" for parameter \"@PARAM_NAME@\", expecting enumeration type \"@ENUM_TYPE@\"
* `INVALID_PARTNER_ID` - Invalid partner id \"@PID@\"
* `INVALID_SERVICE_CONFIGURATION` - Invalid service configuration. Unknown service [@SRV_NAME@:@ACTION_NAME@].
* `OBJECT_TYPE_ABSTRACT` - The object type \"@OBJ_TYPE@\" is abstract, use one of the object implementations
* `PROPERTY_VALIDATION_ALL_MUST_BE_NULL_BUT_ONE` - Only one of the passed properties: @PROP_NAME@ should not be null
* `PROPERTY_VALIDATION_MIN_LENGTH` - The property \"@PROP_NAME@\" must have a min length of @MIN_LEN@ characters
* `PROPERTY_VALIDATION_MAX_LENGTH` - The property \"@PROP_NAME@\" cannot have more than @MAX_LEN@ characters
* `PROPERTY_VALIDATION_NUMERIC_VALUE` - The property \"@PROP_NAME@\" must be numeric
* `PROPERTY_VALIDATION_WRONG_FORMAT` - The property \"@PROP_NAME@\" must match format @FORMAT@
* `PROPERTY_VALIDATION_MIN_VALUE` - The property \"@PROP_NAME@\" must have a min value of @MIN_VAL@
* `PROPERTY_VALIDATION_MAX_VALUE` - The property \"@PROP_NAME@\" must have a max value of @MAX_VAL@
* `PROPERTY_VALIDATION_NOT_UPDATABLE` - The property \"@PROP_NAME@\" cannot be updated
* `PROPERTY_VALIDATION_ADMIN_PROPERTY` - The property \"@PROP_NAME@\" is updatable with admin session only
* `INVALID_USER_ID` - Invalid user id
* `DATA_CENTER_ID_NOT_FOUND` - There is no data center with id [@DCID@]
* `PLUGIN_NOT_AVAILABLE_FOR_PARTNER` - Plugin [@PLUGIN@] is not available for partner [@PARTNER@]
* `SYSTEM_NAME_ALREADY_EXISTS` - System name [@SYS_NAME@] already exists
* `LOCK_TIMED_OUT` - Timed out while attempting to grab lock
* `MAX_FILE_SYNCS_FOR_OBJECT_PER_DAY_REACHED` - Max update limit was reached. Object ID \"@OBJECT_ID@\" will not updated with latest chnages
* `ENTRY_NOT_READY` - Entry \"@ENTRY_NAME@\" is not ready
* `INVALID_ENTRY_TYPE` - Entry \"@ENTRY_NAME@\" type is \"@WRONG_ENTRY_TYPE@\", type must be \"@RIGHT_ENTRY_TYPE@\"
* `INVALID_ENTRY_MEDIA_TYPE` - Entry \"@ENTRY_NAME@\" media type is \"@WRONG_MEDIA_TYPE@\", media type must be \"@RIGHT_MEDIA_TYPE@\"
* `ENTRY_ALREADY_WITH_CONTENT` - Entry already associated with content
* `ENTRY_ID_NOT_REPLACED` - Entry id \"@ENTRY_ID@\" not replaced
* `ENTRY_REPLACEMENT_ALREADY_EXISTS` - Entry already in replacement
* `ENTRY_TYPE_NOT_SUPPORTED` - Entry type \"@ENTRY_TYPE@\" not suppported
* `RESOURCE_TYPE_NOT_SUPPORTED` - Resource type \"@RES_TYPE@\" not suppported
* `RESOURCES_MULTIPLE_DATA_CENTERS` - Resources created on different data centers
* `ENTRY_MEDIA_TYPE_NOT_SUPPORTED` - Entry media type \"@MEDIA_TYPE@\" not suppported
* `UPLOADED_FILE_NOT_FOUND_BY_TOKEN` - The uploaded file was not found by the given token id, or was already used
* `REMOTE_DC_NOT_FOUND` - Remote data center \"@DC@\" not found
* `LOCAL_FILE_NOT_FOUND` - Local file was not found \"@FILE@\"
* `RECORDED_WEBCAM_FILE_NOT_FOUND` - The recorded webcam file was not found by the given token id, or was already used
* `INVALID_WEBCAM_TOKEN_ID` - Invalid webcam token id
* `PERMISSION_DENIED_TO_UPDATE_ENTRY` - User can update only the entries he own, otherwise an admin session must be used
* `INVALID_RANK_VALUE` - Invalid rank value, rank should be between 1 and 5
* `MAX_CATEGORIES_FOR_ENTRY_REACHED` - Entry can be linked with a maximum of \"@CATEGORIES@\" categories
* `MAX_ASSETS_FOR_ENTRY_REACHED` - Entry can contain maximum of \"@ASSETS@\" assets
* `INVALID_ENTRY_SCHEDULE_DATES` - Invalid entry schedule dates
* `INVALID_ENTRY_STATUS` - Invalid entry status
* `ENTRY_CANNOT_BE_FLAGGED` - Entry cannot be flagged
* `ENTRY_CANNOT_BE_TRIMMED` - Entry cannot be trimmed
* `NOTIFICATION_FOR_ENTRY_NOT_FOUND` - Notification for entry id \"@ENTRY@\" not found
* `BULK_UPLOAD_NOT_FOUND` - Bulk upload id \"@ID@\" not found
* `SOURCE_WIDGET_OR_UICONF_REQUIRED` - SourceWidgetId or UiConfId id are required
* `SOURCE_WIDGET_NOT_FOUND` - Source widget id \"@ID@\" not found
* `CANNOT_DISABLE_ENTITLEMENT_WITH_NO_ENTRY_ID` - Cannot disable entitlement when widget is not set to an entry
* `CANNOT_DISABLE_ENTITLEMENT_FOR_WIDGET_WHEN_ENTITLEMENT_ENFORCEMENT_ENABLE` - Cannot create widget with no entitlement enforcement when current session is with entitlement enabled
* `UICONF_ID_NOT_FOUND` - UI conf id \"@ID@\" not found
* `ACCESS_CONTROL_NEW_VERSION_UPDATE` - Access control id \"@ID@\" should be updated using AccessControlProfile service
* `ACCESS_CONTROL_ID_NOT_FOUND` - Access control id \"@ID@\" not found
* `MAX_NUMBER_OF_ACCESS_CONTROLS_REACHED` - Max number of \"@MAX_NUM@\" access controls was reached
* `CANNOT_DELETE_DEFAULT_ACCESS_CONTROL` - Default access control cannot be deleted
* `EXCEEDED_ENTRIES_PER_ACCESS_CONTROL_FOR_UPDATE` - exceeded entries per access control id @id@ for update
* `CANNOT_TRANSFER_ENTRIES_TO_ANOTHER_ACCESS_CONTROL_OBJECT` - no default access control for current partner
* `APP_TOKEN_ID_NOT_FOUND` - Application token id \"@ID@\" not found
* `APP_TOKEN_NOT_ACTIVE` - Application token id \"@ID@\" not active
* `APP_TOKEN_EXPIRED` - Application token id \"@ID@\" expired
* `INVALID_APP_TOKEN_HASH` - Invalid application token hash
* `CONVERSION_PROFILE_ID_NOT_FOUND` - Conversion profile id \"@ID@\" not found
* `INGESTION_PROFILE_ID_NOT_FOUND` - Ingestion profile id \"@ID@\" not found
* `CANNOT_DELETE_DEFAULT_CONVERSION_PROFILE` - Default conversion profile cannot be deleted
* `ASSET_PARAMS_INVALID_TYPE` - Asset params id \"@ASSET_PARAMS_ID@\" type \"@TYPE@\" is invalid
* `CONVERSION_PROFILE_ASSET_PARAMS_NOT_FOUND` - Conversion profile id \"@PROFILE_ID@\" asset params id \"@PARAMS_ID@\" not found
* `FLAVOR_PARAMS_ID_NOT_FOUND` - Flavor params id \"@ID@\" not found
* `FLAVOR_PARAMS_NOT_FOUND` - Flavor params not found
* `FLAVOR_PARAMS_DUPLICATE` - Flavor params [@PARAMS@] defined more than once
* `FLAVOR_PARAMS_SOURCE_DUPLICATE` - More than onc source flavor defined
* `FLAVOR_PARAMS_OUTPUT_ID_NOT_FOUND` - Flavor params output id \"@ID@\" not found
* `THUMB_PARAMS_OUTPUT_ID_NOT_FOUND` - Thumbnail params output id \"@ID@\" not found
* `ASSET_ID_NOT_FOUND` - Asset id \"@ID@\" not found
* `ASSET_PARAMS_ORIGIN_NOT_SUPPORTED` - Asset params @ID@ of type @TYPE@ does not support origin @ORIGIN@
* `ASSET_NOT_ALLOWED` - Flavor asset id \"@ID@\" not allowed
* `FLAVOR_ASSET_ID_NOT_FOUND` - Flavor asset id \"@ID@\" not found
* `FLAVOR_ASSET_ALREADY_EXISTS` - Flavor asset id \"@ASSET_ID@\" already use flavor params id \"@PARAMS_ID@\"
* `FLAVOR_ASSET_RECONVERT_ORIGINAL` - Cannot reconvert original flavor asset
* `ORIGINAL_FLAVOR_ASSET_IS_MISSING` - The original flavor asset is missing
* `ORIGINAL_FLAVOR_ASSET_NOT_CREATED` - The original flavor asset could not be created [@DATA@]
* `NO_FLAVORS_FOUND` - No flavors found
* `NO_EXTERNAL_CONTENT_EXISTS` - Can't delete local content because no external content exists
* `THUMB_ASSET_ID_NOT_FOUND` - The Thumbnail asset id \"@ID@\" not found
* `THUMB_ASSET_PARAMS_ID_NOT_FOUND` - The Thumbnail asset not found for params id \"@ID@\"
* `THUMB_ASSET_IS_NOT_READY` - The thumbnail asset is not ready
* `THUMB_ASSET_ALREADY_EXISTS` - Thumbnail asset id \"@ASSET_ID@\" already use thumbnail params id \"@PARAMS_ID@\"
* `THUMB_ASSET_DOWNLOAD_FAILED` - Failed to download thumbnail from URL \"@URL_PATH@\"
* `THUMB_ASSET_IS_DEFAULT` - Thumbnail asset \"@ASSET@\" is default and could not be deleted
* `THUMB_ASSET_ID_IS_NOT_TIMED_THUMB_TYPE` - Thumbnail asset \"@ASSET@\" is not of type timed thumb
* `CATEGORY_NOT_FOUND` - Category id \"@ID@\" not found
* `CATEGORY_NOT_PERMITTED` - Category \"@CATEGORY@\" is not permitted
* `PARENT_CATEGORY_NOT_FOUND` - Parent category id \"@ID@\" not found
* `DUPLICATE_CATEGORY` - The category \"@CATEGORY@\" already exists
* `PARENT_CATEGORY_IS_CHILD` - The parent category \"@PARENT_CATEGORY@\" is one of the children for category \"@OTHER_CATEGORY@\"
* `CATEGORIES_LOCKED` - Categories are locked
* `CANNOT_INHERIT_MEMBERS_WHEN_PARENT_CATEGORY_IS_NOT_SET` - Cannot inherit members when parent category is not set
* `NOT_ENTITLED_TO_UPDATE_CATEGORY` - Current User is not entitled to update this category
* `CATEGORY_DOES_NOT_HAVE_PARENT_CATEGORY` - Category doesn't have parent category
* `CANNOT_UPDATE_CATEGORY_PRIVACY_CONTEXT` - Cannot update privacy context
* `CANNOT_MOVE_CATEGORIES_FROM_DIFFERENT_PARENT_CATEGORY` - Cannot move categories from different parent categories
* `CANNOT_UPDATE_CATEGORY_ENTITLEMENT_FIELDS_WITH_NO_PRIVACY_CONTEXT` - Cannot update category's entitlement fields when privacy context is not set on the categroy
* `CANNOT_SET_APPEAR_IN_LIST_FIELD_WITH_NO_PRIVACY_CONTEXT` - Cannot set appear in list field when privacy context is not set on the categroy
* `CANNOT_SET_MODERATION_FIELD_WITH_NO_PRIVACY_CONTEXT` - Cannot set moderation field when privacy context is not set on the categroy
* `CANNOT_SET_INHERITANCE_TYPE_FIELD_WITH_NO_PRIVACY_CONTEXT` - Cannot set inheritance field when privacy context is not set on the categroy
* `CANNOT_SET_PRIVACY_FIELD_WITH_NO_PRIVACY_CONTEXT` - Cannot set privacy field when privacy context is not set on the categroy
* `CANNOT_SET_OWNER_FIELD_WITH_NO_PRIVACY_CONTEXT` - Cannot set owner field when privacy context is not set on the categroy
* `CANNOT_SET_USER_JOIN_POLICY_FIELD_WITH_NO_PRIVACY_CONTEXT` - Cannot set user join policy field when privacy context is not set on the categroy
* `CANNOT_SET_OWNER_FIELD_WITH_USER_ID` - Cannot set owner field with user id \"@ID@\", user id is invalid
* `CANNOT_SET_CONTIRUBUTION_POLICY_FIELD_WITH_NO_PRIVACY_CONTEXT` - Cannot set contribution policy field when privacy context is not set on the categroy
* `CANNOT_SET_DEFAULT_PERMISSION_LEVEL_FIELD_WITH_NO_PRIVACY_CONTEXT` - Cannot set default permission level field when privacy context is not set on the categroy
* `PRIVACY_CONTEXT_INVALID_STRING` - Privacy context is invalid \"@CONTEXT@\"
* `CANNOT_SET_OWNER_WHEN_CATEGORY_INHERIT_MEMBERS` - Cannot set owner when category is set to inherit
* `CANNOT_SET_USER_JOIN_POLICY_WHEN_CATEGORY_INHERIT_MEMBERS` - Cannot set user join policy when category is set to inherit
* `CANNOT_SET_DEFAULT_PERMISSION_LEVEL_WHEN_CATEGORY_INHERIT_MEMBERS` - Cannot set default permission level when category is set to inherit
* `CANNOT_SET_MULTI_PRIVACY_CONTEXT` -  Cannot set multiple privacy context when Disable Category Limit feature is turned on
* `AGGREGATION_CATEGORY_WRONG_ASSOCIATION` -  Cannot create aggregation category association
* `SCHEDULER_HOST_CONFLICT` - Scheduler id \"@SCHED_ID@\" conflicts between hosts: \"@HOST1@\" and \"@HOST2@\"
* `SCHEDULER_NOT_FOUND` - Scheduler id \"@ID@\" not found
* `WORKER_NOT_FOUND` - Worker id \"@ID@\" not found
* `COMMAND_NOT_FOUND` - Command id \"@ID@\" not found
* `COMMAND_ALREADY_PENDING` - Command already pending
* `PARTNER_NOT_SET` - Partner not set
* `PARTNER_NOT_FOUND` - Partner not found @PARTNER@
* `INVALID_UPLOAD_TOKEN_ID` - Invalid upload token id
* `UPLOAD_PARTIAL_ERROR` - File was uploaded partially
* `UPLOAD_ERROR` - Upload failed
* `UPLOADED_FILE_NOT_FOUND` - Uploaded file not found [@FILE@]
* `BULK_UPLOAD_CREATE_RESULT_FILE_SYNC_ERROR` - Unable to create file sync object for bulk upload result
* `BULK_UPLOAD_CREATE_CONVERT_FILE_SYNC_ERROR` - Unable to create file sync object for flavor conversion
* `UPLOAD_TOKEN_NOT_FOUND` - Upload token not found
* `UPLOAD_TOKEN_INVALID_STATUS_FOR_UPLOAD` - Upload token is in an invalid status for uploading a file, maybe the file was already uploaded
* `UPLOAD_TOKEN_INVALID_STATUS_FOR_ADD_ENTRY` - Upload token is in an invalid status for adding entry, maybe the a file was not uploaded or the token was used
* `UPLOAD_TOKEN_CANNOT_RESUME` - Cannot resume the upload, original file was not found
* `UPLOAD_TOKEN_CANNOT_MATCH_EXPECTED_SIZE` - Failed to match expected file size
* `NON_GROUP_PARTNER_ATTEMPTING_TO_ASSIGN_CHILD` - Partner id [@PID@] is not a VAR/GROUP, but is attempting to create child partner
* `NON_PARENT_PARTNER_ATTEMPTING_TO_COPY_PARTNER` - Partner id [@PID@] is not the parent of template partner [@T_PARTNER@]
* `INVALID_OBJECT_ID` - Invalid object id [@ID@]
* `USER_NOT_FOUND` - User was not found
* `GROUP_NOT_FOUND` - Group was not found
* `GROUP_USER_ALREADY_EXISTS` - GroupUser already exists
* `USER_EXCEEDED_MAX_GROUPS` - User exceeded max number of groups
* `GROUP_USER_DOES_NOT_EXIST` - Invalid GroupUser for group [\"@GROUP@\"] and for user [\"@USER@\"]
* `USER_LOGIN_ALREADY_ENABLED` - User is already allowed to login
* `USER_LOGIN_ALREADY_DISABLED` - User is already not allowed to login
* `PROPERTY_VALIDATION_NO_USAGE_PERMISSION` - Current user does not have permission to use property \"@PROP@\"
* `PROPERTY_VALIDATION_NO_UPDATE_PERMISSION` - Current user does not have permission to update property \"@PROP@\"
* `PROPERTY_VALIDATION_NO_INSERT_PERMISSION` - Current user does not have permission to insert property \"@PROP@\"
* `USER_NOT_ADMIN` - User [@USER@] is not admin
* `ROLE_NAME_ALREADY_EXISTS` - A role with the same name already exists
* `PERMISSION_ITEM_NOT_FOUND` - Permission item does not exists
* `PROPERTY_DEPRECATED` - The property \"@PROP@\" is deprecated and should not be used
* `PROPERTY_IS_NOT_DEFINED` - The property \"@PROP@\" is not defined on type \"@TYPE@\"
* `INVALID_XSLT` - Invalid xslt
* `INVALID_XSLT_MISSING_TEMPLATE_RSS` - Invalid xslt, missing rss's template tag with the following convention: xsl:template name=\"rssx\" match=\"/\"
* `INVALID_XSLT_MISSING_TEMPLATE_ITEM` - Invalid xslt, missing item's template tag with the following convention: xsl:template name=\"item\" match=\"item\"
* `INVALID_XSLT_MISSING_APPLY_TEMPLATES_ITEM` - Invalid xslt, missing apply-template tag for item's template with the following convention: xsl:apply-templates name=\"item\"
* `SYNDICATION_FEED_INVALID_STORAGE_ID` - Invalid storage id
* `SYNDICATION_FEED_KALTURA_DC_ONLY` - Partner configured to use Kaltura data centers only
* `FILE_DOESNT_EXIST` - File doesnt exist
* `FILE_NOT_FOUND` - File not found
* `STORAGE_PROFILE_ID_NOT_FOUND` - Storage profile id @ID@ not found
* `STORAGE_PROFILE_RULES_NOT_FULFILLED` - Storage profile rules for profile id @ID@ are not fulfilled
* `FILE_PENDING` - File is pending
* `CANNOT_RESET_PASSWORD_FOR_SYSTEM_PARTNER` - Password cannot be reset for system partner
* `REPORT_NOT_FOUND` - Report id \"@ID@\" not found
* `REPORT_NOT_PUBLIC` - Report id \"@ID@\" is not public
* `REPORT_PARAMETER_MISSING` - Parameter \"@PARAM@\" is missing
* `SEARCH_TOO_GENERAL` - Unable to create report. Query produced too many results
* `INVALID_CATEGORY_USER_ID` - Invalid CategoryUser for category [\"@CAT@\"] and for user [\"@USER@\"]
* `CATEGORY_USER_ALREADY_EXISTS` - CategoryUser already exists
* `CATEGORY_INHERIT_MEMBERS` - Cannot add members to this category since its inherit members from parent category [\"@CAT@\"]
* `CATEGORY_INHERIT_MEMBERS_MUST_SET_PARENT_CATEGORY` - Category that inherit members must have parent category set
* `CATEGORY_USER_JOIN_NOT_ALLOWED` - cannot register to this category [\"@CAT@\"]
* `CANNOT_UPDATE_CATEGORY_USER` - cannot update category user
* `MUST_FILTER_USERS_OR_CATEGORY` - Must filter users or categories
* `CANNOT_OVERRIDE_MANUAL_CHANGES` - Cannot override manual changes
* `CANNOT_UPDATE_CATEGORY_USER_OWNER` - Cannot change CategoryUser object for category Owner
* `ENTRY_CATEGORY_FIELD_IS_DEPRECATED` - entry->categories and entry->categoriesIds fields are deprecated - user categoryEntry service
* `CANNOT_ASSIGN_ENTRY_TO_CATEGORY` - Cannot assign entry to category
* `CANNOT_REMOVE_ENTRY_FROM_CATEGORY` - Cannot remove entry from category
* `CANNOT_ACTIVATE_CATEGORY_ENTRY` - Cannot activate categoryEntry
* `CANNOT_ACTIVATE_CATEGORY_ENTRY_SINCE_IT_IS_NOT_PENDING` - Cannot activate a non pending categoryEntry
* `CANNOT_REJECT_CATEGORY_ENTRY_SINCE_IT_IS_NOT_PENDING` - Cannot reject a non pending categoryEntry
* `CANNOT_REJECT_CATEGORY_ENTRY` - Cannot reject category entry
* `ENTRY_IS_NOT_ASSIGNED_TO_CATEGORY` - Entry doesn't assigned to category
* `MUST_FILTER_ENTRY_ID_EQUAL` - Must filter on entry id
* `MUST_FILTER_ON_ENTRY_OR_CATEGORY` - Must filter on entry id or category
* `CATEGORY_ENTRY_ALREADY_EXISTS` - Entry already assigned to this category
* `CATEGORY_IS_LOCKED` - Category is locked - cannot delete or change parent id
* `CATEGORY_MAX_USER_REACHED` - Max amount of users per category @MAX@ has been reached
* `CANNOT_INDEX_OBJECT_WHEN_ENTITLEMENT_IS_ENABLE` - Cannot index object when enetitlment is enabled
* `CANNOT_LIST_RELATED_ENTITLED_WHEN_ENTITLEMENT_IS_ENABLE` - Objects that require entitlement should not be listed [@FILTER@] as related-objects when enetitlment is enabled
* `USER_KS_CANNOT_LIST_RELATED_ENTRIES` - Entries should not be listed [@FILTER@] as related-objects with unprivileged user ks
* `LIVE_STREAM_STATUS_CANNOT_BE_DETERMINED` - Status cannot be determined for live stream protocol [@PROT@]
* `ENCODING_IP_NOT_PINGABLE` - One or both of the provided encoding IPs is not pingable
* `EXTENDING_ITEM_INCOMPATIBLE_COMBINATION` - This extending object MRSS must replace the XPath contents
* `EXTENDING_ITEM_MISSING_XPATH` - Extending item must contain xpath
* `LIVE_STREAM_INVALID_TOKEN` - Invalid token supplied for live entry [@ENTRY_ID@]
* `LIVE_STREAM_EXCEEDED_MAX_PASSTHRU` - Partner exceeded max pass-through live streams in entry[@ENTRY_ID@]
* `LIVE_STREAM_EXCEEDED_MAX_TRANSCODED` - Partner exceeded max concurrent transcoded live streams in entry[@ENTRY_ID@]
* `LIVE_STREAM_EXCEEDED_MAX_RECORDED_DURATION` - Entry exceeded max recorded live stream duration in entry[@ENTRY_ID@]
* `LIVE_STREAM_ALREADY_BROADCASTING` - Entry [@ENTRY_ID@] already broadcasting to server [@MEDIA_SERVER@]
* `CANNOT_UPDATE_FIELDS_WHILE_ENTRY_BROADCASTING` - Cannot update [@FIELD@] while entry is broadcasting
* `CANNOT_UPDATE_FIELDS_RECORDED_ENTRY_STILL_NOT_READY` - Cannot update [@FIELD@] while all vod entry flavors are not ready
* `DELIVERY_TYPE_NOT_SPECIFIED` - At least one non auto delivery type must be specified
* `SPHINX_CRITERIA_EXCEEDED_MAX_MATCHES_ALLOWED` - Unable to generate list. max matches value was reached
* `ASSIGNING_INFO_TO_ENTRY_WITH_PARENT_IS_FORBIDDEN` - assigning categories|scheduling|access control to entry with parent entry \"@ID@\" is not allowed
* `PARENT_ENTRY_ID_NOT_FOUND` - parent entry id \"@ID@\" not found
* `FILE_ASSET_ID_NOT_FOUND` - File asset id [\"@ASSET_ID@\"] not found
* `MEDIA_SERVER_NOT_FOUND` - Media server [@MEDIA_SERVER_ID@] not found
* `NO_MEDIA_SERVER_FOUND` - No media server found for entry [@ENTRY_ID@]
* `MEDIA_SERVER_SERVICE_NOT_FOUND` - Media server [@MEDIA_SERVER_ID@] service [@SERVICE@] not found
* `HOST_NAME_ALREADY_EXISTS` - Host Name [@HOST_NAME@] already exists
* `SERVER_NODE_NOT_FOUND` - server node with host name [@HOST_NAME@] not found
* `ENTRY_SERVER_NODE_NOT_FOUND` - Entry server node with entry id [@ENTRY_ID@] and server type [@SERVER_TYPE@] not found
* `ENTRY_SERVER_NODE_MULTI_RESULT` - There were several results for entry server node with entry id [@ENTRY_ID@] and server type [@SERVER_TYPE@]
* `MUST_FILTER_ON_ENTRY_OR_SERVER_TYPE` - Must filter on entry id or server type
* `ENTRY_SERVER_NODE_OBJECT_TYPE_ERROR` - There is an error in the DB, object type [@OBJ_TYPE@] of EntryServerNode id [@ENTRY_SERVER_NODE_ID@] is unknown