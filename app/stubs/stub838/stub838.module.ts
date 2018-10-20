import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub838Component} from "./stub838.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub838Component
        }])
    ],
    declarations: [
        Stub838Component
    ]
})
export class Stub838Module {

}
