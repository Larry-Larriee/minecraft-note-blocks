import banjoSound from './Note-Block-Sounds/Banjo/Banjo - Made with Clipchamp.mp3';
import bassSound from './Note-Block-Sounds/Bass/Bass.mp3';
import bassDrumSound from './Note-Block-Sounds/Bass Drum/Bass Drum.mp3';
import bellSound from './Note-Block-Sounds/Bells/Bells.mp3';
import bitSound from './Note-Block-Sounds/Bit/Bit.mp3';
import chimeSound from './Note-Block-Sounds/Chimes/Chimes.mp3';
import cowBellSound from './Note-Block-Sounds/Cow Bell/CowBell.mp3';
import didgeridooSound from './Note-Block-Sounds/Didgeridoo/Didgeridoo.mp3';
import ePianoSound from './Note-Block-Sounds/Electric Piano/Electric Piano.mp3';
import fluteSound from './Note-Block-Sounds/Flute/Flute.mp3';
import guitarSound from './Note-Block-Sounds/Guitar/Guitar.mp3';
import hatSound from './Note-Block-Sounds/Hihat/HiHat.mp3';
import ironXylophoneSound from './Note-Block-Sounds/Iron Xylophone/IXylo.mp3';
import snareSound from './Note-Block-Sounds/Snare Drum/Snare Drum.mp3';
import xylophoneSound from './Note-Block-Sounds/Xylophone/Xylo.mp3';

export let banjo         = new Audio(banjoSound);
export let bass          = new Audio(bassSound);
export let bassDrum      = new Audio(bassDrumSound);
export let bell          = new Audio(bellSound);
export let bit           = new Audio(bitSound);
export let chime         = new Audio(chimeSound);
export let cowBell       = new Audio(cowBellSound);
export let didgeridoo    = new Audio(didgeridooSound);
export let ePiano        = new Audio(ePianoSound);
export let flute         = new Audio(fluteSound);
export let guitar        = new Audio(guitarSound);
export let hat           = new Audio(hatSound);
export let ironXylophone = new Audio(ironXylophoneSound);
export let snare         = new Audio(snareSound);
export let xylophone     = new Audio(xylophoneSound);    

export const soundNames = {
    "banjo": "Banjo",
    "bass": "Bass (String Bass)",
    "bassDrum": "Bass Drum (Kick)",
    "bell": "Bells (Glockenspiel)",
    "bit": "\"Bit\" (Square wave)",
    "chime": "Chimes",
    "cowBell": "Cow Bell",
    "didgeridoo": "Didgeridoo",
    "ePiano": "\"Pling\" (Electric piano)",
    "flute": "Flute",
    "guitar": "Guitar",
    "hat": "Clicks and Sticks (Hihat)",
    "ironXylophone": "Iron Xylophone (Vibraphone)",
    "snare": "Snare Drum",
    "xylophone": "Xylophone",

    "banjoMaterial": "Hay Bale",
    "bassMaterial": "Wood",
    "bassDrumMaterial": "Stone, Blackstone, Netherrack, Nylium, Obsidian, Quartz, Sandstone, Ores, Bricks, Corals, Respawn Anchor, Bedrock, Concrete, Observer",
    "bellMaterial": "Block of Gold",
    "bitMaterial": "Block of Emerald",
    "chimeMaterial": "Packed Ice",
    "cowBellMaterial": "Soul Sand",
    "didgeridooMaterial": "Pumpkin",
    "ePianoMaterial": "Glowstone",
    "fluteMaterial": "Clay, Honeycomb Block, Infested Block",
    "guitarMaterial": "Wool",
    "hatMaterial": "Glass, Sea Lantern, Beacon",
    "ironXylophoneMaterial": "Block of Iron",
    "snareMaterial": "Sand, Gravel, Concrete Powder",
    "xylophoneMaterial": "Bone Block"
}