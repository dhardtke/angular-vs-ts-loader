import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub165Component} from "./stub165.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub165Component
        }])
    ],
    declarations: [
        Stub165Component
    ]
})
export class Stub165Module {

}
