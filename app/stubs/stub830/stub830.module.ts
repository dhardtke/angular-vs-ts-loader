import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub830Component} from "./stub830.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub830Component
        }])
    ],
    declarations: [
        Stub830Component
    ]
})
export class Stub830Module {

}
