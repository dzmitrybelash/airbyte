#
# Copyright (c) 2023 Airbyte, Inc., all rights reserved.
#

from typing import List, Literal, Optional, Union

from pydantic import BaseModel, Field


class TokenSplitterConfigModel(BaseModel):
    mode: Literal["token"] = Field("token", const=True)
    separators: List[str] = Field(
        default=["\n\n", "\n", " ", ""], title="Separators", description="List of separator strings to split text fields by"
    )
    keep_separator: bool = Field(default=False, title="Keep separator", description="Whether to keep the separator in the resulting tokens")


class MarkdownHeaderSplitterConfigModel(BaseModel):
    mode: Literal["markdown"] = Field("markdown", const=True)
    split_level: int = Field(
        default=1,
        title="Split level",
        description="Level of markdown headers to split text fields by. Headings down to the specified level will be used as split points",
        le=6,
        ge=1,
    )


class CodeSplitterConfigModel(BaseModel):
    mode: Literal["code"] = Field("code", const=True)
    language: str = Field(
        title="Language",
        description="Split code in suitable places based on the programming language",
        enum=[
            "cpp",
            "go",
            "java",
            "js",
            "php",
            "proto",
            "python",
            "rst",
            "ruby",
            "rust",
            "scala",
            "swift",
            "markdown",
            "latex",
            "html",
            "sol",
        ],
    )


TextSplitterConfigModel = Union[TokenSplitterConfigModel, MarkdownHeaderSplitterConfigModel, CodeSplitterConfigModel]


class ProcessingConfigModel(BaseModel):
    chunk_size: int = Field(
        ...,
        title="Chunk size",
        maximum=8191,
        description="Size of chunks in tokens to store in vector store (make sure it is not too big for the context if your LLM)",
    )
    chunk_overlap: int = Field(
        title="Chunk overlap",
        description="Size of overlap between chunks in tokens to store in vector store to better capture relevant context",
        default=0,
    )
    text_fields: Optional[List[str]] = Field(
        default=[],
        title="Text fields to embed",
        description="List of fields in the record that should be used to calculate the embedding. The field list is applied to all streams in the same way and non-existing fields are ignored. If none are defined, all fields are considered text fields. When specifying text fields, you can access nested fields in the record by using dot notation, e.g. `user.name` will access the `name` field in the `user` object. It's also possible to use wildcards to access all fields in an object, e.g. `users.*.name` will access all `names` fields in all entries of the `users` array.",
        always_show=True,
        examples=["text", "user.name", "users.*.name"],
    )
    metadata_fields: Optional[List[str]] = Field(
        default=[],
        title="Fields to store as metadata",
        description="List of fields in the record that should be stored as metadata. The field list is applied to all streams in the same way and non-existing fields are ignored. If none are defined, all fields are considered metadata fields. When specifying text fields, you can access nested fields in the record by using dot notation, e.g. `user.name` will access the `name` field in the `user` object. It's also possible to use wildcards to access all fields in an object, e.g. `users.*.name` will access all `names` fields in all entries of the `users` array. When specifying nested paths, all matching values are flattened into an array set to a field named by the path.",
        always_show=True,
        examples=["age", "user", "user.name"],
    )
    text_splitter: TextSplitterConfigModel = Field(
        default=None,
        title="Text splitter",
        discriminator="mode",
        type="object",
        description="Split text fields into chunks based on the specified method.",
    )

    class Config:
        schema_extra = {"group": "processing"}


class OpenAIEmbeddingConfigModel(BaseModel):
    mode: Literal["openai"] = Field("openai", const=True)
    openai_key: str = Field(..., title="OpenAI API key", airbyte_secret=True)

    class Config:
        title = "OpenAI"
        schema_extra = {
            "description": "Use the OpenAI API to embed text. This option is using the text-embedding-ada-002 model with 1536 embedding dimensions."
        }


class FakeEmbeddingConfigModel(BaseModel):
    mode: Literal["fake"] = Field("fake", const=True)

    class Config:
        title = "Fake"
        schema_extra = {
            "description": "Use a fake embedding made out of random vectors with 1536 embedding dimensions. This is useful for testing the data pipeline without incurring any costs."
        }


class FromFieldEmbeddingConfigModel(BaseModel):
    mode: Literal["from_field"] = Field("from_field", const=True)
    field_name: str = Field(
        ..., title="Field name", description="Name of the field in the record that contains the embedding", examples=["embedding", "vector"]
    )
    dimensions: int = Field(
        ..., title="Embedding dimensions", description="The number of dimensions the embedding model is generating", examples=[1536, 384]
    )

    class Config:
        title = "From Field"
        schema_extra = {
            "description": "Use a field in the record as the embedding. This is useful if you already have an embedding for your data and want to store it in the vector store."
        }


class CohereEmbeddingConfigModel(BaseModel):
    mode: Literal["cohere"] = Field("cohere", const=True)
    cohere_key: str = Field(..., title="Cohere API key", airbyte_secret=True)

    class Config:
        title = "Cohere"
        schema_extra = {"description": "Use the Cohere API to embed text."}
