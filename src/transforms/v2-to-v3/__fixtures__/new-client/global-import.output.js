// This file is generated by scripts/generateNewClientTests/index.ts
// Do not edit this file directly. Instead, edit the script and run it to regenerate this file.
"use strict";
import { AccessAnalyzer } from "@aws-sdk/client-accessanalyzer";
import { Account } from "@aws-sdk/client-account";
import { ACM } from "@aws-sdk/client-acm";
import { ACMPCA } from "@aws-sdk/client-acm-pca";
import { AlexaForBusiness } from "@aws-sdk/client-alexa-for-business";
import { Amp } from "@aws-sdk/client-amp";
import { Amplify } from "@aws-sdk/client-amplify";
import { AmplifyBackend } from "@aws-sdk/client-amplifybackend";
import { AmplifyUIBuilder } from "@aws-sdk/client-amplifyuibuilder";
import { APIGateway } from "@aws-sdk/client-api-gateway";
import { ApiGatewayManagementApi } from "@aws-sdk/client-apigatewaymanagementapi";
import { ApiGatewayV2 } from "@aws-sdk/client-apigatewayv2";
import { AppMesh } from "@aws-sdk/client-app-mesh";
import { AppConfig } from "@aws-sdk/client-appconfig";
import { AppConfigData } from "@aws-sdk/client-appconfigdata";
import { Appflow } from "@aws-sdk/client-appflow";
import { AppIntegrations } from "@aws-sdk/client-appintegrations";
import { ApplicationAutoScaling } from "@aws-sdk/client-application-auto-scaling";
import { ApplicationDiscoveryService as Discovery } from "@aws-sdk/client-application-discovery-service";
import { ApplicationInsights } from "@aws-sdk/client-application-insights";
import { ApplicationCostProfiler } from "@aws-sdk/client-applicationcostprofiler";
import { AppRunner } from "@aws-sdk/client-apprunner";
import { AppStream } from "@aws-sdk/client-appstream";
import { AppSync } from "@aws-sdk/client-appsync";
import { ARCZonalShift } from "@aws-sdk/client-arc-zonal-shift";
import { Athena } from "@aws-sdk/client-athena";
import { AuditManager } from "@aws-sdk/client-auditmanager";
import { AutoScaling } from "@aws-sdk/client-auto-scaling";
import { AutoScalingPlans } from "@aws-sdk/client-auto-scaling-plans";
import { Backup } from "@aws-sdk/client-backup";
import { BackupGateway } from "@aws-sdk/client-backup-gateway";
import { BackupStorage } from "@aws-sdk/client-backupstorage";
import { Batch } from "@aws-sdk/client-batch";
import { Billingconductor } from "@aws-sdk/client-billingconductor";
import { Braket } from "@aws-sdk/client-braket";
import { Budgets } from "@aws-sdk/client-budgets";
import { Chime } from "@aws-sdk/client-chime";
import { ChimeSDKIdentity } from "@aws-sdk/client-chime-sdk-identity";
import { ChimeSDKMediaPipelines } from "@aws-sdk/client-chime-sdk-media-pipelines";
import { ChimeSDKMeetings } from "@aws-sdk/client-chime-sdk-meetings";
import { ChimeSDKMessaging } from "@aws-sdk/client-chime-sdk-messaging";
import { ChimeSDKVoice } from "@aws-sdk/client-chime-sdk-voice";
import { Cloud9 } from "@aws-sdk/client-cloud9";
import { CloudControl } from "@aws-sdk/client-cloudcontrol";
import { CloudDirectory } from "@aws-sdk/client-clouddirectory";
import { CloudFormation } from "@aws-sdk/client-cloudformation";
import { CloudFront } from "@aws-sdk/client-cloudfront";
import { CloudHSM } from "@aws-sdk/client-cloudhsm";
import { CloudHSMV2 } from "@aws-sdk/client-cloudhsm-v2";
import { CloudSearch } from "@aws-sdk/client-cloudsearch";
import { CloudSearchDomain } from "@aws-sdk/client-cloudsearch-domain";
import { CloudTrail } from "@aws-sdk/client-cloudtrail";
import { CloudWatch } from "@aws-sdk/client-cloudwatch";
import { CloudWatchEvents } from "@aws-sdk/client-cloudwatch-events";
import { CloudWatchLogs } from "@aws-sdk/client-cloudwatch-logs";
import { Codeartifact as CodeArtifact } from "@aws-sdk/client-codeartifact";
import { CodeBuild } from "@aws-sdk/client-codebuild";
import { CodeCatalyst } from "@aws-sdk/client-codecatalyst";
import { CodeCommit } from "@aws-sdk/client-codecommit";
import { CodeDeploy } from "@aws-sdk/client-codedeploy";
import { CodeGuruReviewer } from "@aws-sdk/client-codeguru-reviewer";
import { CodeGuruProfiler } from "@aws-sdk/client-codeguruprofiler";
import { CodePipeline } from "@aws-sdk/client-codepipeline";
import { CodeStar } from "@aws-sdk/client-codestar";
import { CodeStarConnections as CodeStarconnections } from "@aws-sdk/client-codestar-connections";
import { CodestarNotifications as CodeStarNotifications } from "@aws-sdk/client-codestar-notifications";
import { CognitoIdentity } from "@aws-sdk/client-cognito-identity";
import { CognitoIdentityProvider as CognitoIdentityServiceProvider } from "@aws-sdk/client-cognito-identity-provider";
import { CognitoSync } from "@aws-sdk/client-cognito-sync";
import { Comprehend } from "@aws-sdk/client-comprehend";
import { ComprehendMedical } from "@aws-sdk/client-comprehendmedical";
import { ComputeOptimizer } from "@aws-sdk/client-compute-optimizer";
import { ConfigService } from "@aws-sdk/client-config-service";
import { Connect } from "@aws-sdk/client-connect";
import { ConnectContactLens } from "@aws-sdk/client-connect-contact-lens";
import { ConnectCampaigns } from "@aws-sdk/client-connectcampaigns";
import { ConnectCases } from "@aws-sdk/client-connectcases";
import { ConnectParticipant } from "@aws-sdk/client-connectparticipant";
import { ControlTower } from "@aws-sdk/client-controltower";
import { CostAndUsageReportService as CUR } from "@aws-sdk/client-cost-and-usage-report-service";
import { CostExplorer } from "@aws-sdk/client-cost-explorer";
import { CustomerProfiles } from "@aws-sdk/client-customer-profiles";
import { DataPipeline } from "@aws-sdk/client-data-pipeline";
import { DatabaseMigrationService as DMS } from "@aws-sdk/client-database-migration-service";
import { DataBrew } from "@aws-sdk/client-databrew";
import { DataExchange } from "@aws-sdk/client-dataexchange";
import { DataSync } from "@aws-sdk/client-datasync";
import { DAX } from "@aws-sdk/client-dax";
import { Detective } from "@aws-sdk/client-detective";
import { DeviceFarm } from "@aws-sdk/client-device-farm";
import { DevOpsGuru } from "@aws-sdk/client-devops-guru";
import { DirectConnect } from "@aws-sdk/client-direct-connect";
import { DirectoryService } from "@aws-sdk/client-directory-service";
import { DLM } from "@aws-sdk/client-dlm";
import { DocDB } from "@aws-sdk/client-docdb";
import { DocDBElastic } from "@aws-sdk/client-docdb-elastic";
import { Drs } from "@aws-sdk/client-drs";
import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { DynamoDBStreams } from "@aws-sdk/client-dynamodb-streams";
import { EBS } from "@aws-sdk/client-ebs";
import { EC2 } from "@aws-sdk/client-ec2";
import { EC2InstanceConnect } from "@aws-sdk/client-ec2-instance-connect";
import { ECR } from "@aws-sdk/client-ecr";
import { ECRPUBLIC } from "@aws-sdk/client-ecr-public";
import { ECS } from "@aws-sdk/client-ecs";
import { EFS } from "@aws-sdk/client-efs";
import { EKS } from "@aws-sdk/client-eks";
import { ElasticBeanstalk } from "@aws-sdk/client-elastic-beanstalk";
import { ElasticInference } from "@aws-sdk/client-elastic-inference";
import { ElasticLoadBalancing as ELB } from "@aws-sdk/client-elastic-load-balancing";
import { ElasticLoadBalancingV2 as ELBv2 } from "@aws-sdk/client-elastic-load-balancing-v2";
import { ElasticTranscoder } from "@aws-sdk/client-elastic-transcoder";
import { ElastiCache } from "@aws-sdk/client-elasticache";
import { ElasticsearchService as ES } from "@aws-sdk/client-elasticsearch-service";
import { EMR } from "@aws-sdk/client-emr";
import { EMRContainers as EMRcontainers } from "@aws-sdk/client-emr-containers";
import { EMRServerless } from "@aws-sdk/client-emr-serverless";
import { EventBridge } from "@aws-sdk/client-eventbridge";
import { Evidently } from "@aws-sdk/client-evidently";
import { Finspace } from "@aws-sdk/client-finspace";
import { FinspaceData as Finspacedata } from "@aws-sdk/client-finspace-data";
import { Firehose } from "@aws-sdk/client-firehose";
import { Fis } from "@aws-sdk/client-fis";
import { FMS } from "@aws-sdk/client-fms";
import { Forecast as ForecastService } from "@aws-sdk/client-forecast";
import { Forecastquery as ForecastQueryService } from "@aws-sdk/client-forecastquery";
import { FraudDetector } from "@aws-sdk/client-frauddetector";
import { FSx } from "@aws-sdk/client-fsx";
import { GameLift } from "@aws-sdk/client-gamelift";
import { GameSparks } from "@aws-sdk/client-gamesparks";
import { Glacier } from "@aws-sdk/client-glacier";
import { GlobalAccelerator } from "@aws-sdk/client-global-accelerator";
import { Glue } from "@aws-sdk/client-glue";
import { Grafana } from "@aws-sdk/client-grafana";
import { Greengrass } from "@aws-sdk/client-greengrass";
import { GreengrassV2 } from "@aws-sdk/client-greengrassv2";
import { GroundStation } from "@aws-sdk/client-groundstation";
import { GuardDuty } from "@aws-sdk/client-guardduty";
import { Health } from "@aws-sdk/client-health";
import { HealthLake } from "@aws-sdk/client-healthlake";
import { Honeycode } from "@aws-sdk/client-honeycode";
import { IAM } from "@aws-sdk/client-iam";
import { Identitystore as IdentityStore } from "@aws-sdk/client-identitystore";
import { Imagebuilder } from "@aws-sdk/client-imagebuilder";
import { Inspector } from "@aws-sdk/client-inspector";
import { Inspector2 } from "@aws-sdk/client-inspector2";
import { IoT as Iot } from "@aws-sdk/client-iot";
import { IoT1ClickDevicesService } from "@aws-sdk/client-iot-1click-devices-service";
import { IoT1ClickProjects } from "@aws-sdk/client-iot-1click-projects";
import { IoTDataPlane as IotData } from "@aws-sdk/client-iot-data-plane";
import { IoTEvents } from "@aws-sdk/client-iot-events";
import { IoTEventsData } from "@aws-sdk/client-iot-events-data";
import { IoTJobsDataPlane } from "@aws-sdk/client-iot-jobs-data-plane";
import { IoTRoboRunner } from "@aws-sdk/client-iot-roborunner";
import { IoTWireless } from "@aws-sdk/client-iot-wireless";
import { IoTAnalytics } from "@aws-sdk/client-iotanalytics";
import { IotDeviceAdvisor } from "@aws-sdk/client-iotdeviceadvisor";
import { IoTFleetHub } from "@aws-sdk/client-iotfleethub";
import { IoTFleetWise } from "@aws-sdk/client-iotfleetwise";
import { IoTSecureTunneling } from "@aws-sdk/client-iotsecuretunneling";
import { IoTSiteWise } from "@aws-sdk/client-iotsitewise";
import { IoTThingsGraph } from "@aws-sdk/client-iotthingsgraph";
import { IoTTwinMaker } from "@aws-sdk/client-iottwinmaker";
import { Ivs as IVS } from "@aws-sdk/client-ivs";
import { Ivschat } from "@aws-sdk/client-ivschat";
import { Kafka } from "@aws-sdk/client-kafka";
import { KafkaConnect } from "@aws-sdk/client-kafkaconnect";
import { Kendra } from "@aws-sdk/client-kendra";
import { Keyspaces } from "@aws-sdk/client-keyspaces";
import { Kinesis } from "@aws-sdk/client-kinesis";
import { KinesisAnalytics } from "@aws-sdk/client-kinesis-analytics";
import { KinesisAnalyticsV2 } from "@aws-sdk/client-kinesis-analytics-v2";
import { KinesisVideo } from "@aws-sdk/client-kinesis-video";
import { KinesisVideoArchivedMedia } from "@aws-sdk/client-kinesis-video-archived-media";
import { KinesisVideoMedia } from "@aws-sdk/client-kinesis-video-media";
import { KinesisVideoSignaling as KinesisVideoSignalingChannels } from "@aws-sdk/client-kinesis-video-signaling";
import { KinesisVideoWebRTCStorage } from "@aws-sdk/client-kinesis-video-webrtc-storage";
import { KMS } from "@aws-sdk/client-kms";
import { LakeFormation } from "@aws-sdk/client-lakeformation";
import { Lambda } from "@aws-sdk/client-lambda";
import { LexModelBuildingService } from "@aws-sdk/client-lex-model-building-service";
import { LexModelsV2 } from "@aws-sdk/client-lex-models-v2";
import { LexRuntimeService as LexRuntime } from "@aws-sdk/client-lex-runtime-service";
import { LexRuntimeV2 } from "@aws-sdk/client-lex-runtime-v2";
import { LicenseManager } from "@aws-sdk/client-license-manager";
import { LicenseManagerLinuxSubscriptions } from "@aws-sdk/client-license-manager-linux-subscriptions";
import { LicenseManagerUserSubscriptions } from "@aws-sdk/client-license-manager-user-subscriptions";
import { Lightsail } from "@aws-sdk/client-lightsail";
import { Location } from "@aws-sdk/client-location";
import { LookoutEquipment } from "@aws-sdk/client-lookoutequipment";
import { LookoutMetrics } from "@aws-sdk/client-lookoutmetrics";
import { LookoutVision } from "@aws-sdk/client-lookoutvision";
import { M2 } from "@aws-sdk/client-m2";
import { MachineLearning } from "@aws-sdk/client-machine-learning";
import { Macie } from "@aws-sdk/client-macie";
import { Macie2 } from "@aws-sdk/client-macie2";
import { ManagedBlockchain } from "@aws-sdk/client-managedblockchain";
import { MarketplaceCatalog } from "@aws-sdk/client-marketplace-catalog";
import { MarketplaceCommerceAnalytics } from "@aws-sdk/client-marketplace-commerce-analytics";
import { MarketplaceEntitlementService } from "@aws-sdk/client-marketplace-entitlement-service";
import { MarketplaceMetering } from "@aws-sdk/client-marketplace-metering";
import { MediaConnect } from "@aws-sdk/client-mediaconnect";
import { MediaConvert } from "@aws-sdk/client-mediaconvert";
import { MediaLive } from "@aws-sdk/client-medialive";
import { MediaPackage } from "@aws-sdk/client-mediapackage";
import { MediaPackageVod } from "@aws-sdk/client-mediapackage-vod";
import { MediaStore } from "@aws-sdk/client-mediastore";
import { MediaStoreData } from "@aws-sdk/client-mediastore-data";
import { MediaTailor } from "@aws-sdk/client-mediatailor";
import { MemoryDB } from "@aws-sdk/client-memory-db";
import { Mgn } from "@aws-sdk/client-mgn";
import { MigrationHub } from "@aws-sdk/client-migration-hub";
import { MigrationHubRefactorSpaces } from "@aws-sdk/client-migration-hub-refactor-spaces";
import { MigrationHubConfig } from "@aws-sdk/client-migrationhub-config";
import { MigrationHubOrchestrator } from "@aws-sdk/client-migrationhuborchestrator";
import { MigrationHubStrategy } from "@aws-sdk/client-migrationhubstrategy";
import { Mobile } from "@aws-sdk/client-mobile";
import { Mq as MQ } from "@aws-sdk/client-mq";
import { MTurk } from "@aws-sdk/client-mturk";
import { MWAA } from "@aws-sdk/client-mwaa";
import { Neptune } from "@aws-sdk/client-neptune";
import { NetworkFirewall } from "@aws-sdk/client-network-firewall";
import { NetworkManager } from "@aws-sdk/client-networkmanager";
import { Nimble } from "@aws-sdk/client-nimble";
import { OAM } from "@aws-sdk/client-oam";
import { Omics } from "@aws-sdk/client-omics";
import { OpenSearch } from "@aws-sdk/client-opensearch";
import { OpenSearchServerless } from "@aws-sdk/client-opensearchserverless";
import { OpsWorks } from "@aws-sdk/client-opsworks";
import { OpsWorksCM } from "@aws-sdk/client-opsworkscm";
import { Organizations } from "@aws-sdk/client-organizations";
import { Outposts } from "@aws-sdk/client-outposts";
import { Panorama } from "@aws-sdk/client-panorama";
import { Personalize } from "@aws-sdk/client-personalize";
import { PersonalizeEvents } from "@aws-sdk/client-personalize-events";
import { PersonalizeRuntime } from "@aws-sdk/client-personalize-runtime";
import { PI } from "@aws-sdk/client-pi";
import { Pinpoint } from "@aws-sdk/client-pinpoint";
import { PinpointEmail } from "@aws-sdk/client-pinpoint-email";
import { PinpointSMSVoice } from "@aws-sdk/client-pinpoint-sms-voice";
import { PinpointSMSVoiceV2 } from "@aws-sdk/client-pinpoint-sms-voice-v2";
import { Pipes } from "@aws-sdk/client-pipes";
import { Polly } from "@aws-sdk/client-polly";
import { Pricing } from "@aws-sdk/client-pricing";
import { PrivateNetworks } from "@aws-sdk/client-privatenetworks";
import { Proton } from "@aws-sdk/client-proton";
import { QLDB } from "@aws-sdk/client-qldb";
import { QLDBSession } from "@aws-sdk/client-qldb-session";
import { QuickSight } from "@aws-sdk/client-quicksight";
import { RAM } from "@aws-sdk/client-ram";
import { Rbin } from "@aws-sdk/client-rbin";
import { RDS } from "@aws-sdk/client-rds";
import { RDSData as RDSDataService } from "@aws-sdk/client-rds-data";
import { Redshift } from "@aws-sdk/client-redshift";
import { RedshiftData } from "@aws-sdk/client-redshift-data";
import { RedshiftServerless } from "@aws-sdk/client-redshift-serverless";
import { Rekognition } from "@aws-sdk/client-rekognition";
import { Resiliencehub } from "@aws-sdk/client-resiliencehub";
import { ResourceExplorer2 } from "@aws-sdk/client-resource-explorer-2";
import { ResourceGroups } from "@aws-sdk/client-resource-groups";
import { ResourceGroupsTaggingAPI } from "@aws-sdk/client-resource-groups-tagging-api";
import { RoboMaker } from "@aws-sdk/client-robomaker";
import { RolesAnywhere } from "@aws-sdk/client-rolesanywhere";
import { Route53 } from "@aws-sdk/client-route-53";
import { Route53Domains } from "@aws-sdk/client-route-53-domains";
import { Route53RecoveryCluster } from "@aws-sdk/client-route53-recovery-cluster";
import { Route53RecoveryControlConfig } from "@aws-sdk/client-route53-recovery-control-config";
import { Route53RecoveryReadiness } from "@aws-sdk/client-route53-recovery-readiness";
import { Route53Resolver } from "@aws-sdk/client-route53resolver";
import { RUM } from "@aws-sdk/client-rum";
import { S3 } from "@aws-sdk/client-s3";
import { S3Control } from "@aws-sdk/client-s3-control";
import { S3Outposts } from "@aws-sdk/client-s3outposts";
import { SageMakerA2IRuntime as AugmentedAIRuntime } from "@aws-sdk/client-sage-maker-a2iruntime";
import { SageMaker } from "@aws-sdk/client-sagemaker";
import { SagemakerEdge } from "@aws-sdk/client-sagemaker-edge";
import { SageMakerFeatureStoreRuntime } from "@aws-sdk/client-sagemaker-featurestore-runtime";
import { SageMakerGeospatial } from "@aws-sdk/client-sagemaker-geospatial";
import { SageMakerMetrics } from "@aws-sdk/client-sagemaker-metrics";
import { SageMakerRuntime } from "@aws-sdk/client-sagemaker-runtime";
import { Savingsplans as SavingsPlans } from "@aws-sdk/client-savingsplans";
import { Scheduler } from "@aws-sdk/client-scheduler";
import { Schemas } from "@aws-sdk/client-schemas";
import { SecretsManager } from "@aws-sdk/client-secrets-manager";
import { SecurityHub } from "@aws-sdk/client-securityhub";
import { SecurityLake } from "@aws-sdk/client-securitylake";
import { ServerlessApplicationRepository } from "@aws-sdk/client-serverlessapplicationrepository";
import { ServiceCatalog } from "@aws-sdk/client-service-catalog";
import { ServiceCatalogAppRegistry } from "@aws-sdk/client-service-catalog-appregistry";
import { ServiceQuotas } from "@aws-sdk/client-service-quotas";
import { ServiceDiscovery } from "@aws-sdk/client-servicediscovery";
import { SES } from "@aws-sdk/client-ses";
import { SESv2 as SESV2 } from "@aws-sdk/client-sesv2";
import { SFN as StepFunctions } from "@aws-sdk/client-sfn";
import { Shield } from "@aws-sdk/client-shield";
import { Signer } from "@aws-sdk/client-signer";
import { SimSpaceWeaver } from "@aws-sdk/client-simspaceweaver";
import { SMS } from "@aws-sdk/client-sms";
import { SnowDeviceManagement } from "@aws-sdk/client-snow-device-management";
import { Snowball } from "@aws-sdk/client-snowball";
import { SNS } from "@aws-sdk/client-sns";
import { SQS } from "@aws-sdk/client-sqs";
import { SSM } from "@aws-sdk/client-ssm";
import { SSMContacts } from "@aws-sdk/client-ssm-contacts";
import { SSMIncidents } from "@aws-sdk/client-ssm-incidents";
import { SsmSap } from "@aws-sdk/client-ssm-sap";
import { SSO } from "@aws-sdk/client-sso";
import { SSOAdmin } from "@aws-sdk/client-sso-admin";
import { SSOOIDC } from "@aws-sdk/client-sso-oidc";
import { StorageGateway } from "@aws-sdk/client-storage-gateway";
import { STS } from "@aws-sdk/client-sts";
import { Support } from "@aws-sdk/client-support";
import { SupportApp } from "@aws-sdk/client-support-app";
import { SWF } from "@aws-sdk/client-swf";
import { Synthetics } from "@aws-sdk/client-synthetics";
import { Textract } from "@aws-sdk/client-textract";
import { TimestreamQuery } from "@aws-sdk/client-timestream-query";
import { TimestreamWrite } from "@aws-sdk/client-timestream-write";
import { Transcribe as TranscribeService } from "@aws-sdk/client-transcribe";
import { Transfer } from "@aws-sdk/client-transfer";
import { Translate } from "@aws-sdk/client-translate";
import { VoiceID } from "@aws-sdk/client-voice-id";
import { WAF } from "@aws-sdk/client-waf";
import { WAFRegional } from "@aws-sdk/client-waf-regional";
import { WAFV2 } from "@aws-sdk/client-wafv2";
import { WellArchitected } from "@aws-sdk/client-wellarchitected";
import { Wisdom } from "@aws-sdk/client-wisdom";
import { WorkDocs } from "@aws-sdk/client-workdocs";
import { WorkLink } from "@aws-sdk/client-worklink";
import { WorkMail } from "@aws-sdk/client-workmail";
import { WorkMailMessageFlow } from "@aws-sdk/client-workmailmessageflow";
import { WorkSpaces } from "@aws-sdk/client-workspaces";
import { WorkSpacesWeb } from "@aws-sdk/client-workspaces-web";
import { XRay } from "@aws-sdk/client-xray";

new ACM();
new ACMPCA();
new APIGateway();
new ARCZonalShift();
new AccessAnalyzer();
new Account();
new AlexaForBusiness();
new Amp();
new Amplify();
new AmplifyBackend();
new AmplifyUIBuilder();
new ApiGatewayManagementApi();
new ApiGatewayV2();
new AppConfig();
new AppConfigData();
new AppIntegrations();
new AppMesh();
new AppRunner();
new AppStream();
new AppSync();
new Appflow();
new ApplicationAutoScaling();
new ApplicationCostProfiler();
new ApplicationInsights();
new Athena();
new AuditManager();
new AugmentedAIRuntime();
new AutoScaling();
new AutoScalingPlans();
new Backup();
new BackupGateway();
new BackupStorage();
new Batch();
new Billingconductor();
new Braket();
new Budgets();
new CUR();
new Chime();
new ChimeSDKIdentity();
new ChimeSDKMediaPipelines();
new ChimeSDKMeetings();
new ChimeSDKMessaging();
new ChimeSDKVoice();
new Cloud9();
new CloudControl();
new CloudDirectory();
new CloudFormation();
new CloudFront();
new CloudHSM();
new CloudHSMV2();
new CloudSearch();
new CloudSearchDomain();
new CloudTrail();
new CloudWatch();
new CloudWatchEvents();
new CloudWatchLogs();
new CodeArtifact();
new CodeBuild();
new CodeCatalyst();
new CodeCommit();
new CodeDeploy();
new CodeGuruProfiler();
new CodeGuruReviewer();
new CodePipeline();
new CodeStar();
new CodeStarNotifications();
new CodeStarconnections();
new CognitoIdentity();
new CognitoIdentityServiceProvider();
new CognitoSync();
new Comprehend();
new ComprehendMedical();
new ComputeOptimizer();
new ConfigService();
new Connect();
new ConnectCampaigns();
new ConnectCases();
new ConnectContactLens();
new ConnectParticipant();
new ControlTower();
new CostExplorer();
new CustomerProfiles();
new DAX();
new DLM();
new DMS();
new DataBrew();
new DataExchange();
new DataPipeline();
new DataSync();
new Detective();
new DevOpsGuru();
new DeviceFarm();
new DirectConnect();
new DirectoryService();
new Discovery();
new DocDB();
new DocDBElastic();
new Drs();
new DynamoDB();
new DynamoDBStreams();
new EBS();
new EC2();
new EC2InstanceConnect();
new ECR();
new ECRPUBLIC();
new ECS();
new EFS();
new EKS();
new ELB();
new ELBv2();
new EMR();
new EMRServerless();
new EMRcontainers();
new ES();
new ElastiCache();
new ElasticBeanstalk();
new ElasticInference();
new ElasticTranscoder();
new EventBridge();
new Evidently();
new FMS();
new FSx();
new Finspace();
new Finspacedata();
new Firehose();
new Fis();
new ForecastQueryService();
new ForecastService();
new FraudDetector();
new GameLift();
new GameSparks();
new Glacier();
new GlobalAccelerator();
new Glue();
new Grafana();
new Greengrass();
new GreengrassV2();
new GroundStation();
new GuardDuty();
new Health();
new HealthLake();
new Honeycode();
new IAM();
new IVS();
new IdentityStore();
new Imagebuilder();
new Inspector();
new Inspector2();
new IoT1ClickDevicesService();
new IoT1ClickProjects();
new IoTAnalytics();
new IoTEvents();
new IoTEventsData();
new IoTFleetHub();
new IoTFleetWise();
new IoTJobsDataPlane();
new IoTRoboRunner();
new IoTSecureTunneling();
new IoTSiteWise();
new IoTThingsGraph();
new IoTTwinMaker();
new IoTWireless();
new Iot();
new IotData();
new IotDeviceAdvisor();
new Ivschat();
new KMS();
new Kafka();
new KafkaConnect();
new Kendra();
new Keyspaces();
new Kinesis();
new KinesisAnalytics();
new KinesisAnalyticsV2();
new KinesisVideo();
new KinesisVideoArchivedMedia();
new KinesisVideoMedia();
new KinesisVideoSignalingChannels();
new KinesisVideoWebRTCStorage();
new LakeFormation();
new Lambda();
new LexModelBuildingService();
new LexModelsV2();
new LexRuntime();
new LexRuntimeV2();
new LicenseManager();
new LicenseManagerLinuxSubscriptions();
new LicenseManagerUserSubscriptions();
new Lightsail();
new Location();
new LookoutEquipment();
new LookoutMetrics();
new LookoutVision();
new M2();
new MQ();
new MTurk();
new MWAA();
new MachineLearning();
new Macie();
new Macie2();
new ManagedBlockchain();
new MarketplaceCatalog();
new MarketplaceCommerceAnalytics();
new MarketplaceEntitlementService();
new MarketplaceMetering();
new MediaConnect();
new MediaConvert();
new MediaLive();
new MediaPackage();
new MediaPackageVod();
new MediaStore();
new MediaStoreData();
new MediaTailor();
new MemoryDB();
new Mgn();
new MigrationHub();
new MigrationHubConfig();
new MigrationHubOrchestrator();
new MigrationHubRefactorSpaces();
new MigrationHubStrategy();
new Mobile();
new Neptune();
new NetworkFirewall();
new NetworkManager();
new Nimble();
new OAM();
new Omics();
new OpenSearch();
new OpenSearchServerless();
new OpsWorks();
new OpsWorksCM();
new Organizations();
new Outposts();
new PI();
new Panorama();
new Personalize();
new PersonalizeEvents();
new PersonalizeRuntime();
new Pinpoint();
new PinpointEmail();
new PinpointSMSVoice();
new PinpointSMSVoiceV2();
new Pipes();
new Polly();
new Pricing();
new PrivateNetworks();
new Proton();
new QLDB();
new QLDBSession();
new QuickSight();
new RAM();
new RDS();
new RDSDataService();
new RUM();
new Rbin();
new Redshift();
new RedshiftData();
new RedshiftServerless();
new Rekognition();
new Resiliencehub();
new ResourceExplorer2();
new ResourceGroups();
new ResourceGroupsTaggingAPI();
new RoboMaker();
new RolesAnywhere();
new Route53();
new Route53Domains();
new Route53RecoveryCluster();
new Route53RecoveryControlConfig();
new Route53RecoveryReadiness();
new Route53Resolver();
new S3();
new S3Control();
new S3Outposts();
new SES();
new SESV2();
new SMS();
new SNS();
new SQS();
new SSM();
new SSMContacts();
new SSMIncidents();
new SSO();
new SSOAdmin();
new SSOOIDC();
new STS();
new SWF();
new SageMaker();
new SageMakerFeatureStoreRuntime();
new SageMakerGeospatial();
new SageMakerMetrics();
new SageMakerRuntime();
new SagemakerEdge();
new SavingsPlans();
new Scheduler();
new Schemas();
new SecretsManager();
new SecurityHub();
new SecurityLake();
new ServerlessApplicationRepository();
new ServiceCatalog();
new ServiceCatalogAppRegistry();
new ServiceDiscovery();
new ServiceQuotas();
new Shield();
new Signer();
new SimSpaceWeaver();
new SnowDeviceManagement();
new Snowball();
new SsmSap();
new StepFunctions();
new StorageGateway();
new Support();
new SupportApp();
new Synthetics();
new Textract();
new TimestreamQuery();
new TimestreamWrite();
new TranscribeService();
new Transfer();
new Translate();
new VoiceID();
new WAF();
new WAFRegional();
new WAFV2();
new WellArchitected();
new Wisdom();
new WorkDocs();
new WorkLink();
new WorkMail();
new WorkMailMessageFlow();
new WorkSpaces();
new WorkSpacesWeb();
new XRay();
