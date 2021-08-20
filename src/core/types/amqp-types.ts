/**
 * Core AMQP Message - Use for the Core AMQP Input
 *
 * This object is used by AMQP Input to pass in all the pieces of a message that has been received.
 *
 * Refer to https://www.squaremobius.net/amqp.node/channel_api.html#channel_consume for details
 * on message fields and properties.
 */
export interface ICoreAmqpMessage {
  // The content of the message, already as a string. Applications should JSON.PARSE or otherwise verify the structure
  // is as expected by the application.
  amqpMessageContent: string,
  // The content of the AMQP message "fields" property as an object.
  amqpMessageFields: object,
  // The content of the AMQP message "properties" property as an object, including any message headers.
  amqpMessageProperties: object,
}

/**
 * Core AMQP Publish Action - Used for the Core AMQP Output
 *
 * This object is used to control what the Core AMQP Output publishes.
 */
export interface ICoreAmqpPublishAction {
  // The content of the message, which should already be a string. Applications should JSON.stringify before passing.
  amqpMessageContent: string,
  // Optional, a routing key to use when publishing the message into the Exchange.
  amqpPublishRoutingKey?: string,
  // amqpPublishOptions should be formed per https://www.squaremobius.net/amqp.node/channel_api.html#channel_publish
  // options! This allows setting headers, expiration, etc.
  amqpPublishOptions?: object,
}
