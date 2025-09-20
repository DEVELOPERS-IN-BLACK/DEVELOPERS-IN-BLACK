import React from 'react';

const FloatingCodeAnimation: React.FC = () => {
  const codeSnippets = [
    'const dev = "gentleman"',
    'console.log("DIB");',
    'function hack() { return true; }',
    'class Elite extends Developer',
    'import { mystery } from "black"',
    'export default Excellence',
    'npm install --save luxury',
    'git commit -m "elegant"',
    'sudo make me coffee',
    'if (passion) return true',
    'while (coding) dream();',
    'try { changeWorld() }',
    'async function future()',
    'const magic = await wonder',
    'return innovation.map()',
    'filter(x => x.isAwesome)',
    'reduce((a,b) => a + b.value)',
    'typeof genius === "undefined"',
    'new Promise((resolve) =>',
    'setTimeout(() => success, ∞)',

    // --- thêm JS / TS ---
    'const graceful = (...args) => args.join(" ");',
    'export const signature = "Developers in Blacks";',
    'interface Suit { color: string; tie: boolean }',
    'type Elite = Record<string, unknown> & { honor: number }',
    'await fetch("/dib/badge").then(r => r.ok)',

    // --- Python ---
    'def inspire(): return "Keep building, stay classy"',
    'class Developer:\n    def __init__(self, name): self.name = name',
    'with open("manifest.json") as f: config = json.load(f)',
    'async def ship(): await deploy()',
    'users = [u for u in users if u.active]',
    'lambda x: x.score > 9000',

    // --- Go ---
    'package main; import "fmt"; func main() { fmt.Println("DIB") }',
    'go func() { work() }() // goroutine',
    'ch := make(chan string); go producer(ch)',
    'var elites = []string{"gentleman","engineer","artist"}',
    'fmt.Sprintf("Project: %s v%d", name, ver)',

    // --- Rust ---
    'fn main() { println!("Developers in Blacks"); }',
    'let future = async { do_magic().await };',
    'let v: Vec<i32> = (0..10).collect();',
    'trait Gentleman { fn bow(&self); }',
    'impl Gentleman for Developer { fn bow(&self) { println!("...") } }',
    'use tokio::spawn; spawn(async { serve().await });',

    // --- Java ---
    'public class Main { public static void main(String[] args) { System.out.println("DIB"); } }',
    'List<String> devs = Arrays.asList("DIB","Elite");',
    'Optional<User> u = findUser(id); u.ifPresent(User::greet);',
    '@Deprecated public void legacy() {}',
    'Stream.of(1,2,3).map(i -> i * 2).collect(Collectors.toList())',

    // --- Shell / DevOps / Misc ---
    'docker build -t dib/app .',
    'kubectl apply -f deployment.yaml --record',
    'echo "Signed by DIB" >> README.md',
    'scp build.tar.gz deploy@server:/opt/dib',
    'cron: "0 3 * * * /usr/bin/backup.sh"',

    // --- SQL / Config snippets ---
    'INSERT INTO users (id, name, score) VALUES (1, "DIB", 1000);',
    '{"name":"dib","license":"DIB License v1.0","version":"1.0.0"}',
    '<meta name="author" content="Developers in Blacks" />'
  ];
  
  const randomPositions = [
    { startX: Math.random() * 100, startY: Math.random() * 100 },
    { startX: Math.random() * 100, startY: Math.random() * 100 },
    { startX: Math.random() * 100, startY: Math.random() * 100 },
    { startX: Math.random() * 100, startY: Math.random() * 100 },
    { startX: Math.random() * 100, startY: Math.random() * 100 },
    { startX: Math.random() * 100, startY: Math.random() * 100 },
    { startX: Math.random() * 100, startY: Math.random() * 100 },
    { startX: Math.random() * 100, startY: Math.random() * 100 },
    { startX: Math.random() * 100, startY: Math.random() * 100 },
    { startX: Math.random() * 100, startY: Math.random() * 100 },
    { startX: Math.random() * 100, startY: Math.random() * 100 },
    { startX: Math.random() * 100, startY: Math.random() * 100 },
    { startX: Math.random() * 100, startY: Math.random() * 100 },
    { startX: Math.random() * 100, startY: Math.random() * 100 },
    { startX: Math.random() * 100, startY: Math.random() * 100 },
    { startX: Math.random() * 100, startY: Math.random() * 100 },
    { startX: Math.random() * 100, startY: Math.random() * 100 },
    { startX: Math.random() * 100, startY: Math.random() * 100 },
    { startX: Math.random() * 100, startY: Math.random() * 100 },
    { startX: Math.random() * 100, startY: Math.random() * 100 }
  ];
  
  const colors = ['text-green-400/5', 'text-blue-400/4', 'text-purple-400/6', 'text-cyan-400/3', 'text-yellow-400/4'];
  const sizes = ['text-xs', 'text-sm', 'text-xs'];
  const animations = ['float-random-1', 'float-random-2', 'float-random-3', 'float-random-4'];

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <div
          key={`floating-${i}`}
          className={`absolute font-mono will-change-transform ${colors[i % colors.length]} ${sizes[i % sizes.length]}`}
          style={{
            left: `${randomPositions[i % randomPositions.length].startX}%`,
            top: `${randomPositions[i % randomPositions.length].startY}%`,
            animation: `${animations[i % animations.length]} ${12 + (i % 8)}s ease-in-out infinite`,
            animationDelay: `${(i * 0.8)}s`,
            animationFillMode: 'both'
          }}
        >
          {codeSnippets[i]}
        </div>
      ))}
    </div>
  );
};

export default FloatingCodeAnimation;