class Api::V1::MessagesController < Api::V1::ApplicationController
  def index
    @messages = Message.all
    render json: { messages: @messages }
  end
end
