import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub363Component} from "./stub363.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub363Component
        }])
    ],
    declarations: [
        Stub363Component
    ]
})
export class Stub363Module {

}
