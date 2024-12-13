type EventType = 'click' | 'scroll' | 'mousemove';
type ExcludeType = Exclude<EventType, 'scroll'>; // 'click' | 'mousemove'

const handleEvent = (event: ExcludeType) => {
    console.log(`Handling Event: ${event}`);
}

handleEvent('click'); // Handling Event: click