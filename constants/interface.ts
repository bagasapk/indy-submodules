export enum NDMMenu {
    OVERVIEW = 'overview',
    DATA_QUALITY = 'data_quality',
    DATA_QUALITY_SUMMARY = 'data_quality_summary',
    DATA_QUALITY_SUMMARY_MONITORING = 'data_quality_summary_monitoring',
    DATA_QUALITY_SUMMARY_PERFORMANCE = 'data_quality_summary_performance',
    DATA_QUALITY_SUMMARY_COMPARISON = 'data_quality_summary_comparison',
    DATA_QUALITY_OPERATIONAL = 'data_quality_operational',
    DATA_QUALITY_OPERATIONAL_TIMELINESS = 'data_quality_operational_timeliness',
    DATA_QUALITY_OPERATIONAL_UNIQUENESS = 'data_quality_operational_uniqueness',
    DATA_QUALITY_OPERATIONAL_CONSISTENCY = 'data_quality_operational_consistency',
    DATA_QUALITY_SYSTEM = 'data_quality_system',
    DATA_QUALITY_SYSTEM_ACCURACY = 'data_quality_system_accuracy',
    DATA_QUALITY_SYSTEM_COMPLETENESS = 'data_quality_system_completeness',
    DATA_QUALITY_SYSTEM_VALIDITY = 'data_quality_system_validity',
    NDM_MONITORING = 'ndm_monitoring',
    NDM_TICKETING = 'ndm_ticketing',
    TECHNICAL_SUPPORT = 'technical_support',
    TECHNICAL_SUPPORT_CATALOGUE_KNOWLEDGE = 'technical_support_catalogue_knowledge',
    TECHNICAL_SUPPORT_CATALOGUE_KNOWLEDGE_DATA_CATALOGUE = 'technical_support_catalogue_knowledge_data_catalogue',
    TECHNICAL_SUPPORT_CATALOGUE_KNOWLEDGE_BUSINESS_PROCESS = 'technical_support_catalogue_knowledge_business_process',
    TECHNICAL_SUPPORT_CATALOGUE_KNOWLEDGE_BUSINESS_GLOSSARY = 'technical_support_catalogue_knowledge_business_glossary',
    ALERT_SYSTEM = 'alert_system',
}

export interface MenuItem {
  label: React.ReactNode;
  key: React.Key;
  icon?: React.ReactNode;
  children?: (MenuItem | null)[];
  type?: "group";
  menu_name?: NDMMenu;
}
