class Api::SongsController < ApplicationController

  def index
    render json: Song.all
  end

  def create
    song = Song.new(song_params)

    if song.save
      render json: song
    else
      render json: { errors: song.errors}
    end

  end

  def update
    song = Song.find(params[:id])
    song.update(song_params)
    render json: song
  end

  def destroy
    Song.find(params[:id]).destroy
    render json: { message: 'Song Deleted' }
  end

  private 

  def song_params
    params.require(:song).permit(:title, :artist, :position_number)
  end

end
