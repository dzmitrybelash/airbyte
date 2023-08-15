"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[41598],{90043:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(87462),i=(a(67294),a(3905));const o={},r="Airbyte Databases Data Catalog",l={unversionedId:"understanding-airbyte/database-data-catalog",id:"understanding-airbyte/database-data-catalog",title:"Airbyte Databases Data Catalog",description:"Config Database",source:"@site/../docs/understanding-airbyte/database-data-catalog.md",sourceDirName:"understanding-airbyte",slug:"/understanding-airbyte/database-data-catalog",permalink:"/understanding-airbyte/database-data-catalog",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/understanding-airbyte/database-data-catalog.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Json to Avro Conversion for Blob Storage Destinations",permalink:"/understanding-airbyte/json-avro-conversion"},next:{title:"Contributing to Airbyte",permalink:"/contributing-to-airbyte/"}},s={},c=[{value:"Config Database",id:"config-database",level:2},{value:"Jobs Database",id:"jobs-database",level:2}],m={toc:c},p="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(p,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"airbyte-databases-data-catalog"},"Airbyte Databases Data Catalog"),(0,i.kt)("h2",{id:"config-database"},"Config Database"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"workspace"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Each record represents a logical workspace for an Airbyte user. In the open-source version of the product, only one workspace is allowed."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"actor_definition"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Each record represents a connector that Airbyte supports, e.g. Postgres. This table represents all the connectors that is supported by the current running platform."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"actor_type")," column tells us whether the record represents a Source or a Destination."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"spec")," column is a JSON blob. The schema of this JSON blob matches the ",(0,i.kt)("a",{parentName:"li",href:"/understanding-airbyte/airbyte-protocol#actor-specification"},"spec")," model in the Airbyte Protocol. Because the protocol object is JSON, this has to be a JSON blob."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"support_level")," describes the support level of the connector (e.g. community, certified)."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"docker_repository")," field is the name of the docker image associated with the connector definition. ",(0,i.kt)("inlineCode",{parentName:"li"},"docker_image_tag")," is the tag of the docker image and the version of the connector definition."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"source_type")," field is only used for Sources, and represents the category of the connector definition (e.g. API, Database)."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"resource_requirements")," field sets a default resource requirement for any connector of this type. This overrides the default we set for all connector definitions, and it can be overridden by a connection-specific resource requirement. The column is a JSON blob with the schema defined in ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/blob/master/airbyte-config-oss/config-models-oss/src/main/resources/types/ActorDefinitionResourceRequirements.yaml"},"ActorDefinitionResourceRequirements.yaml")),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"public")," boolean column, describes if a connector is available to all workspaces or not. For non, ",(0,i.kt)("inlineCode",{parentName:"li"},"public")," connector definitions, they can be provisioned to a workspace using the ",(0,i.kt)("inlineCode",{parentName:"li"},"actor_definition_workspace_grant")," table. ",(0,i.kt)("inlineCode",{parentName:"li"},"custom")," means that the connector is written by a user of the platform (and not packaged into the Airbyte product)."),(0,i.kt)("li",{parentName:"ul"},"Each record contains additional metadata and display data about a connector (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"name")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"icon"),"), and we should add additional metadata here over time."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"actor_definition_workspace_grant"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Each record represents provisioning a non ",(0,i.kt)("inlineCode",{parentName:"li"},"public")," connector definition to a workspace."),(0,i.kt)("li",{parentName:"ul"},"todo (cgardens) - should this table have a ",(0,i.kt)("inlineCode",{parentName:"li"},"created_at")," column?"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"actor"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Each record represents a configured connector. e.g. A Postgres connector configured to pull data from my database."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"actor_type")," column tells us whether the record represents a Source or a Destination."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"actor_definition_id")," column is a foreign key to the connector definition that this record is implementing."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"configuration")," column is a JSON blob. The schema of this JSON blob matches the schema specified in the ",(0,i.kt)("inlineCode",{parentName:"li"},"spec")," column in the ",(0,i.kt)("inlineCode",{parentName:"li"},"connectionSpecification")," field of the JSON blob. Keep in mind this schema is specific to each connector (e.g. the schema of Postgres and Salesforce are different), which is why this column has to be a JSON blob."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"actor_catalog"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Each record contains a catalog for an actor. The records in this table are meant to be immutable."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"catalog")," column is a JSON blob. The schema of this JSON blob matches the ",(0,i.kt)("a",{parentName:"li",href:"/understanding-airbyte/airbyte-protocol#catalog"},"catalog")," model in the Airbyte Protocol. Because the protocol object is JSON, this has to be a JSON blob. The ",(0,i.kt)("inlineCode",{parentName:"li"},"catalog_hash")," column is a 32-bit murmur3 hash ( x86 variant) of the ",(0,i.kt)("inlineCode",{parentName:"li"},"catalog")," field to make comparisons easier."),(0,i.kt)("li",{parentName:"ul"},"todo (cgardens) - should we remove the ",(0,i.kt)("inlineCode",{parentName:"li"},"modified_at")," column? These records should be immutable."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"actor_catalog_fetch_event"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Each record represents an attempt to fetch the catalog for an actor. The records in this table are meant to be immutable."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"actor_id")," column represents the actor that the catalog is being fetched for. The ",(0,i.kt)("inlineCode",{parentName:"li"},"config_hash")," represents a hash (32-bit murmur3 hash - x86 variant) of the ",(0,i.kt)("inlineCode",{parentName:"li"},"configuration")," column of that actor, at the time the attempt to fetch occurred."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"catalog_id")," is a foreign key to the ",(0,i.kt)("inlineCode",{parentName:"li"},"actor_catalog")," table. It represents the catalog fetched by this attempt. We use the foreign key, because the catalogs are often large and often multiple fetch events result in retrieving the same catalog. Also understanding how often the same catalog is fetched is interesting from a product analytics point of view."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"actor_version")," column represents the ",(0,i.kt)("inlineCode",{parentName:"li"},"actor_definition")," version that was in use when the fetch event happened. This column is needed, because while we can infer the ",(0,i.kt)("inlineCode",{parentName:"li"},"actor_definition")," from the foreign key relationship with the ",(0,i.kt)("inlineCode",{parentName:"li"},"actor")," table, we cannot do the same for the version, as that can change over time."),(0,i.kt)("li",{parentName:"ul"},"todo (cgardens) - should we remove the ",(0,i.kt)("inlineCode",{parentName:"li"},"modified_at")," column? These records should be immutable."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"connection"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Each record in this table configures a connection (",(0,i.kt)("inlineCode",{parentName:"li"},"source_id"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"destination_id"),", and relevant configuration)."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"resource_requirements")," field sets a default resource requirement for the connection. This overrides the default we set for all connector definitions and the default set for the connector definitions. The column is a JSON blob with the schema defined in ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/blob/master/airbyte-config-oss/config-models-oss/src/main/resources/types/ResourceRequirements.yaml"},"ResourceRequirements.yaml"),"."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"source_catalog_id")," column is a foreign key that refers to ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," column in ",(0,i.kt)("inlineCode",{parentName:"li"},"actor_catalog")," table and represents the catalog that was used to configure the connection. This should not be confused with the ",(0,i.kt)("inlineCode",{parentName:"li"},"catalog")," column which contains the ",(0,i.kt)("a",{parentName:"li",href:"/understanding-airbyte/airbyte-protocol#catalog"},"ConfiguredCatalog")," for the connection."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"schedule_type")," column defines what type of schedule is being used. If the ",(0,i.kt)("inlineCode",{parentName:"li"},"type")," is manual, then ",(0,i.kt)("inlineCode",{parentName:"li"},"schedule_data")," will be null. Otherwise, ",(0,i.kt)("inlineCode",{parentName:"li"},"schedule_data")," column is a JSON blob with the schema of ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/blob/master/airbyte-config-oss/config-models-oss/src/main/resources/types/StandardSync.yaml#L74"},"StandardSync#scheduleData")," that defines the actual schedule. The columns ",(0,i.kt)("inlineCode",{parentName:"li"},"manual")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"schedule")," are deprecated and should be ignored (they will be dropped soon)."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"namespace_type")," column configures whether the namespace for the connection should use that defined by the source, the destination, or a user-defined format (",(0,i.kt)("inlineCode",{parentName:"li"},"custom"),"). If ",(0,i.kt)("inlineCode",{parentName:"li"},"custom")," the ",(0,i.kt)("inlineCode",{parentName:"li"},"namespace_format")," column defines the string that will be used as the namespace."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"status")," column describes the activity level of the connector: ",(0,i.kt)("inlineCode",{parentName:"li"},"active")," - current schedule is respected, ",(0,i.kt)("inlineCode",{parentName:"li"},"inactive")," - current schedule is ignored (the connection does not run) but it could be switched back to active, and ",(0,i.kt)("inlineCode",{parentName:"li"},"deprecated")," - the connection is permanently off (cannot be moved to active or inactive)."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"state"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"state")," table represents the current (last) state for a connection. For a connection with ",(0,i.kt)("inlineCode",{parentName:"li"},"stream")," state, there will be a record per stream. For a connection with ",(0,i.kt)("inlineCode",{parentName:"li"},"global")," state, there will be a record per stream and an additional record to store the shared (global) state. For a connection with ",(0,i.kt)("inlineCode",{parentName:"li"},"legacy")," state, there will be one record per connection."),(0,i.kt)("li",{parentName:"ul"},"In the ",(0,i.kt)("inlineCode",{parentName:"li"},"stream")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"global")," state cases, the ",(0,i.kt)("inlineCode",{parentName:"li"},"stream_name")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"namespace")," columns contains the name of the stream whose state is represented by that record. For the shared state in global ",(0,i.kt)("inlineCode",{parentName:"li"},"stream_name")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"namespace")," will be null."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"state")," column contains the state JSON blob. Depending on the type of the connection, the schema of the blob will be different.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"stream")," - for this type, this column is a JSON blob that is a blackbox to the platform and known only to the connector that generated it."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"global")," - for this type, this column is a JSON blob that is a blackbox to the platform and known only to the connector that generated it. This is true for both the states for each stream and the shared state."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"legacy")," - for this type, this column is a JSON blob with a top-level key called ",(0,i.kt)("inlineCode",{parentName:"li"},"state"),". Within that ",(0,i.kt)("inlineCode",{parentName:"li"},"state")," is a blackbox to the platform and known only to the connector that generated it."))),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"type")," column describes the type of the state of the row. type can be ",(0,i.kt)("inlineCode",{parentName:"li"},"STREAM"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"GLOBAL")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"LEGACY"),"."),(0,i.kt)("li",{parentName:"ul"},"The connection_id is a foreign key to the connection for which we are tracking state."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"stream_reset"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Each record in this table represents a stream in a connection that is enqueued to be reset or is currently being reset. It can be thought of as a queue. Once the stream is reset, the record is removed from the table."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"operation"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"operation")," table transformations for a connection beyond the raw output produced by the destination. The two options are: ",(0,i.kt)("inlineCode",{parentName:"li"},"normalization"),", which outputs Airbyte's basic normalization. The second is ",(0,i.kt)("inlineCode",{parentName:"li"},"dbt"),", which allows a user to configure their own custom dbt transformation. A connection can have multiple operations (e.g. it can do ",(0,i.kt)("inlineCode",{parentName:"li"},"normalization")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"dbt"),")."),(0,i.kt)("li",{parentName:"ul"},"If the ",(0,i.kt)("inlineCode",{parentName:"li"},"operation")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"dbt"),", then the ",(0,i.kt)("inlineCode",{parentName:"li"},"operator_dbt")," column will be populated with a JSON blob with the schema from ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/blob/master/airbyte-config-oss/config-models-oss/src/main/resources/types/OperatorDbt.yaml"},"OperatorDbt"),"."),(0,i.kt)("li",{parentName:"ul"},"If the ",(0,i.kt)("inlineCode",{parentName:"li"},"operation")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"normalization"),", then the ",(0,i.kt)("inlineCode",{parentName:"li"},"operator_dbt")," column will be populated with a JSON blob with the scehma from ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/blob/master/airbyte-config-oss/config-models-oss/src/main/resources/types/OperatorNormalization.yaml"},"OperatorNormalization"),"."),(0,i.kt)("li",{parentName:"ul"},"Operations are scoped by workspace, using the ",(0,i.kt)("inlineCode",{parentName:"li"},"workspace_id")," column."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"connection_operation"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This table joins the ",(0,i.kt)("inlineCode",{parentName:"li"},"operation")," table to the ",(0,i.kt)("inlineCode",{parentName:"li"},"connection")," for which it is configured."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"workspace_service_account"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This table is a WIP for an unfinished feature."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"actor_oauth_parameter"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The name of this table is misleading. It refers to parameters to be used for any instance of an ",(0,i.kt)("inlineCode",{parentName:"li"},"actor_definition")," (not an ",(0,i.kt)("inlineCode",{parentName:"li"},"actor"),") within a given workspace. For OAuth, the model is that a user is provisioning access to their data to a third party tool (in this case the Airbyte Platform). Each record represents information (e.g. client id, client secret) for that third party that is getting access."),(0,i.kt)("li",{parentName:"ul"},"These parameters can be scoped by workspace. If ",(0,i.kt)("inlineCode",{parentName:"li"},"workspace_id")," is not present, then the scope of the parameters is to the whole deployment of the platform (e.g. all workspaces)."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"actor_type")," column tells us whether the record represents a Source or a Destination."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"configuration")," column is a JSON blob. The schema of this JSON blob matches the schema specified in the ",(0,i.kt)("inlineCode",{parentName:"li"},"spec")," column in the ",(0,i.kt)("inlineCode",{parentName:"li"},"advanced_auth")," field of the JSON blob. Keep in mind this schema is specific to each connector (e.g. the schema of Hubspot and Salesforce are different), which is why this column has to be a JSON blob."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"secrets"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This table is used to store secrets in open-source versions of the platform that have not set some other secrets store. This table allows us to use the same code path for secrets handling regardless of whether an external secrets store is set or not. This table is used by default for the open-source product."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"airbyte_configs_migrations")," is metadata table used by Flyway (our database migration tool). It is not used for any application use cases."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"airbyte_configs"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Legacy table for config storage. Should be dropped.")))),(0,i.kt)("h2",{id:"jobs-database"},"Jobs Database"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"jobs"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Each record in this table represents a job."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"config_type")," column captures the type of job. We only make jobs for ",(0,i.kt)("inlineCode",{parentName:"li"},"sync")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"reset")," (we do not use them for ",(0,i.kt)("inlineCode",{parentName:"li"},"spec"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"check"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"discover"),")."),(0,i.kt)("li",{parentName:"ul"},"A job represents an attempt to use a connector (or a pair of connectors). The goal of this model is to capture the input of that run. A job can have multiple attempts (see the ",(0,i.kt)("inlineCode",{parentName:"li"},"attempts")," table). The guarantee across all attempts is that the input into each attempt will be the same."),(0,i.kt)("li",{parentName:"ul"},"That input is captured in the ",(0,i.kt)("inlineCode",{parentName:"li"},"config")," column. This column is a JSON Blob with the schema of a ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/blob/master/airbyte-config-oss/config-models-oss/src/main/resources/types/JobConfig.yaml"},"JobConfig"),". Only ",(0,i.kt)("inlineCode",{parentName:"li"},"sync")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"resetConnection")," are ever used in that model.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The other top-level fields are vestigial from when ",(0,i.kt)("inlineCode",{parentName:"li"},"spec"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"check"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"discover")," were used in this model (we will eventually remove them)."))),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"scope")," column contains the ",(0,i.kt)("inlineCode",{parentName:"li"},"connection_id")," for the relevant connection of the job.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Context: It is called ",(0,i.kt)("inlineCode",{parentName:"li"},"scope")," and not ",(0,i.kt)("inlineCode",{parentName:"li"},"connection_id"),", because, this table was originally used for ",(0,i.kt)("inlineCode",{parentName:"li"},"spec"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"check"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"discover"),", and in those cases the ",(0,i.kt)("inlineCode",{parentName:"li"},"scope")," referred to the relevant actor or actor definition. At this point the scope is always a ",(0,i.kt)("inlineCode",{parentName:"li"},"connection_id"),"."))),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"status")," column contains the job status. The lifecycle of a job is explained in detail in the ",(0,i.kt)("a",{parentName:"li",href:"/understanding-airbyte/jobs#job-state-machine"},"Jobs & Workers documentation"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"attempts"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Each record in this table represents an attempt."),(0,i.kt)("li",{parentName:"ul"},"Each attempt belongs to a job--this is captured by the ",(0,i.kt)("inlineCode",{parentName:"li"},"job_id")," column. All attempts for a job will run on the same input."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," column is a unique id across all attempts while the ",(0,i.kt)("inlineCode",{parentName:"li"},"attempt_number")," is an ascending number of the attempts for a job."),(0,i.kt)("li",{parentName:"ul"},"The output of each attempt, however, can be different. The ",(0,i.kt)("inlineCode",{parentName:"li"},"output")," column is a JSON blob with the schema of a ",(0,i.kt)("a",{parentName:"li",href:"ahttps://github.com/airbytehq/airbyte/blob/master/airbyte-config-oss/config-models-oss/src/main/resources/types/StandardSyncOutput.yaml"},"JobOutput"),". Only ",(0,i.kt)("inlineCode",{parentName:"li"},"sync")," is used in that model. Reset jobs will also use the ",(0,i.kt)("inlineCode",{parentName:"li"},"sync")," field, because under the hood ",(0,i.kt)("inlineCode",{parentName:"li"},"reset")," jobs end up just doing a ",(0,i.kt)("inlineCode",{parentName:"li"},"sync")," with special inputs. This object contains all the output info for a sync including stats on how much data was moved.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The other top-level fields are vestigial from when ",(0,i.kt)("inlineCode",{parentName:"li"},"spec"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"check"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"discover")," were used in this model (we will eventually remove them)."))),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"status")," column contains the attempt status. The lifecycle of a job / attempt is explained in detail in the ",(0,i.kt)("a",{parentName:"li",href:"/understanding-airbyte/jobs#job-state-machine"},"Jobs & Workers documentation"),"."),(0,i.kt)("li",{parentName:"ul"},"If the attempt fails, the ",(0,i.kt)("inlineCode",{parentName:"li"},"failure_summary")," column will be populated. The column is a JSON blob with the schema of ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/blob/master/airbyte-config-oss/config-models-oss/src/main/resources/types/AttemptFailureSummary.yaml"},"AttemptFailureReason"),"."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"log_path")," column captures where logs for the attempt will be written."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"created_at"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"started_at"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"ended_at")," track the run time."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"temporal_workflow_id")," column keeps track of what temporal execution is associated with the attempt."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"airbyte_metadata"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This table is a key-value store for various metadata about the platform. It is used to track information about what version the platform is currently on as well as tracking the upgrade history."),(0,i.kt)("li",{parentName:"ul"},"Logically it does not make a lot of sense that it is in the jobs db. It would make sense if it were either in its own dbs or in the config dbs."),(0,i.kt)("li",{parentName:"ul"},"The only two columns are ",(0,i.kt)("inlineCode",{parentName:"li"},"key")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"value"),". It is truly just a key-value store."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"airbyte_jobs_migrations")," is metadata table used by Flyway (our database migration tool). It is not used for any application use cases.")))}d.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(a),h=i,u=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return a?n.createElement(u,r(r({ref:t},m),{},{components:a})):n.createElement(u,r({ref:t},m))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"}}]);