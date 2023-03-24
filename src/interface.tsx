export interface artPiece {
    id: number,
    artist: string,
    title: string,
    fileName: string
    }

export interface CardObject {
    id: string,
    art: artPiece,
    isHeld: boolean,
    isHidden: boolean,
}