class MessagesController < ApplicationController
  before_action :set_group
  def index
    @message = Message.new
    @messages = @group.messages.includes(:user)
    # binding.pry
    respond_to do |format|
      format.html
      format.json{ @new_messages = @messages.where("id > ?", params[:id])}
    end
  end

  def create
    @message = @group.messages.new(message_params)
    if @message.save
      respond_to do |format|
        format.json
        format.html{ redirect_to group_messages_path(@group) }
      end
    else
      render :index
    end
  end

  private

  def message_params
    params.require(:message).permit(:body, :image).merge(user_id: current_user.id)
  end
  def set_group
    @group = Group.find(params[:group_id])
  end
  def edit
  end
end
